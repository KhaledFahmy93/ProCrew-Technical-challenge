const amqp = require('amqplib/callback_api');
const CONN_URL = 'amqp://localhost';

let ch = null;
amqp.connect(CONN_URL, function (error0, conn) {

    if (error0) { throw error0;}
      
    conn.createChannel(function (err, channel) {
        ch = channel;
    });

});


module.exports = {
    publishToQueue: async(queueName, data)=> {
        ch.sendToQueue(queueName, Buffer.from(data) , { persistent: true});
        console.log(" [x] Sent '%s'", data);
        return true;
    },
}

process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});
