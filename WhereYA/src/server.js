import io from 'socket.io-client';
const serverUrl = 'http://192.168.1.17:3000';
let socket;
export const connect = (url) => {
  socket = io(serverUrl || url);
};
export const sendMessage = (message) => {
  socket.emit('chat message', message);
};

export const fetchMessages = () => {
  const messageList = [];
  socket.on('chat message', (msg) => {
    messageList.push(msg);
    console.log('chat message' + msg);
  });
  return messageList;
};
