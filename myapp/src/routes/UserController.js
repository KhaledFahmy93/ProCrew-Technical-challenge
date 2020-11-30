const { validationResult } = require('express-validator');
const {publishToQueue}  =  require('../services/MQService');
const configuration = require('../../knexfile')['dev'];
const knex = require('knex')(configuration);

module.exports = {
	createUser: async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).send(errors);
		}
		
		let data = JSON.stringify(req.body);
		let queueName = 'user_queue';
		try {
			await publishToQueue(queueName,data);
			const user = knex('users').insert({
				name : req.body.name  , email : req.body.email , phone : req.body.phone
			});
			res.status(200).send({'data' : "added successfully to queue" , 'success' :true , 'status':200 });
		} catch (error) {
			console.error(error);
			res.status(502).send("Error")
		}
	}, 

	stoteUser: async (data) => {
		try {
			await knex('users').insert({
				name : data.name  , email : data.email , phone : data.phone
			});
		}
		catch (error) {
			console.error(error);
		}
	}
}