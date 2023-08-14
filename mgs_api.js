const axios = require('axios');
const webSocket = require('ws');

const publish = (message, topicId) => {
    return axios.post(`http://localhost:3001/${topicId}`, message);
}

const subscribe = (topicId) => {
    return new webSocket(`ws://localhost:3001/${topicId}`);
}

module.exports.publish = publish;
module.exports.subscribe = subscribe;