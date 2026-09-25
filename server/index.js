const express = require('express');
const { createServer } = require('node:http');
const cors = require('cors');
const { Server } = require('socket.io');

const router = require('./route');

const app = express();

app.use(cors({ origin: '*' }));
app.use(router);

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'POP', 'DELETE' ],
  },
});

server.listen(5000);
