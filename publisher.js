const api = require('./mgs_api');
const readLine =  require('readline');

const TOPIC_ID = process.env.TOPIC_ID;

const terminal = readLine.createInterface({
    input: process.stdin
});

terminal.on('line', text => {
    const name = process.env.NAME

    const message = {name , text};
    api.publish(message, TOPIC_ID);
});