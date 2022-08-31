const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get('/',(req,res)=>{
// res.send('<h1>Hello world</h2>');
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
});
io.on("connection", (socket) => {
  console.log("a user connected");
});


io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
