const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the world!!');
});

app.listen(3001, () => {
    console.log('Example app listening on port 3001!');
});

module.exports = app