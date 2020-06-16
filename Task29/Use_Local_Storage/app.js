const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/js/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './js/script.js'));
});

app.get('/css/style.css/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './css/style.css'))
});

app.listen(4040, () => console.log('App listening on port 4040'));
