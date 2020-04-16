const listen = async (kafka) => {
    const consumer = kafka.consumer({ groupId: 'test-group' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'topic', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log('topic: ', topic)
            console.log('partition: ', partition)
            console.log('message: ', JSON.parse(message.value.toString()))
        },
    })
}

module.exports = listen