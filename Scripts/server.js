//script to set up and run a local server on port '8000'
//sends the message 'hello express'
const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello express!');
});

server.listen(8000, () => {
    console.log('Server is running...');
});