const PORT = 8080;
const express = require('express');
const { Socket } = require('socket.io');
var app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log(socket);
    console.log(socket.id);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(PORT, () => {
    console.log('server run');
});