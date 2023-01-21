const PORT = 8080;
const express = require('express');
var app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(PORT, () => {
    console.log('server run');
});