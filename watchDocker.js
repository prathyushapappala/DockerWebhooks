const Docker = require('dockerode');
const axios = require('axios');
const docker = new Docker({socketPath: '/Users/prathyusha/.docker/run/docker.sock'}); // docker context ls

const webhookUrl = 'http://localhost:18880/event';

docker.getEvents((err, data) => {
    console.log('Listening for docker events . . .');
    if (err) {
        return console.error('Error getting events:', err);
    }
    data.on('data', chunk => {
        const json = JSON.parse(chunk.toString('utf8'));
        axios.post(webhookUrl, json)
            .then(response => console.log('Event forwarded', json))
            .catch(error => console.error('Error forwarding event:', error));
    });
});