const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('A user connected. ID: ', socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('message', (data) => {
    console.log('Message received: ', data);
    io.emit('message', { message: data });
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('error', (error) => {
    console.log('Error: ', error);
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});