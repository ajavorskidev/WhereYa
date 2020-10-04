import io from 'socket.io-client';
const serverUrl = 'http://192.168.1.17:3000';
let socket;
export const connect = (url) => {
  socket = io(serverUrl || url);
  return socket;
};
export const disconnect = () => {
  socket.disconnect();
};
export const sendMessage = (message) => {
  if (socket) {
    socket.emit('chat message', message);
    return message;
  }
};

export const fetchMessages = () => {
  if (socket) {
    socket.on('chat message', (msg) => {
      console.log(typeof msg);
      console.log('chat message ' + msg);
      return msg;
    });
  }
};
