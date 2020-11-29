const configuration = require('../../knexfile')['dev'];
const knex = require('knex')(configuration);

module.exports = {
    createUser: async (data) => {
        await knex('users').insert({
          name : "Mohamed"  , email : "Mohamed@mohamed" , phone : "0303030303"
        }, 'id');
    },
}