const Consumer = require('./service/Consumer');
const Publisher = require('./service/Publisher');
const { Kafka, logLevel } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'aplicacao-teste',
    brokers: ['localhost:9092'],
    logLevel: logLevel.NOTHING
})

// listen topic
Consumer(kafka);

// sending message every 3 seconds
setInterval(() => {
    Publisher(kafka);
}, 3000);

console.log('runing')