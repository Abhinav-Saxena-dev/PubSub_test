const api = require('./mgs_api');

const TOPIC_ID = process.env.TOPIC_ID;

const displayMessage = (message) => {
    console.log(`> ${message.name}: ${message.text}`);
}

const streamMessage = () => {
    const messagingSocket = api.subscribe(TOPIC_ID);

    messagingSocket.on('message', (data) => {
        const message = JSON.parse(data);
        displayMessage(message);
    });
};

streamMessage();