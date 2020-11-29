const amqp = require('amqplib/callback_api');
const { response } = require('express');
const UserController = require('../routes/UserController');
const CONN_URL = 'amqp://localhost';

amqp.connect(CONN_URL, function(error0, connection) {

    if (error0) { throw error0;}

    connection.createChannel(function(error1, channel) {

        if (error1) { throw error1;}

         let queue = 'user_queue';

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.assertQueue(queue, { durable: false });

        console.log(channel.assertExchange)

        channel.consume(queue, function(msg) {
          console.log(" [x] Received %s", msg.content.toString());
          UserController.stoteUser(JSON.parse(msg.content));
        }, {
      // manual acknowledgment mode,
      // see https://www.rabbitmq.com/confirms.html for details
      noAck: true
    });
  });
});