const send = async (kafka) => {
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
    topic: 'topic',
        messages: [
            { 
                value: JSON.stringify({
                    nome: 'Rafael',
                    idade: 23
                }) 
            },
        ],
    })

    await producer.disconnect()
}

module.exports = send