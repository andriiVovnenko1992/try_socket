const messages = require('./../messages');
const {CONNECTED, NEW_USER_CONNECTED, USER_DISCONNECTED} = require("../../src/constantes");

const users = require("../users");
const {ADD_MESSAGE, NEW_MESSAGE, USERS_COUNT} = require("../../src/constantes");
module.exports = (server) => {
    const io = require('socket.io').listen(server);
    io.on('connect', (socket) => {

        socket.emit(CONNECTED, '', (name) => {
            users.addUser(socket.id, name);
            if(messages.length) {
                socket.emit('MESSAGES', messages);
            }
            io.emit(USERS_COUNT, users.userCount);
            socket.broadcast.emit(NEW_USER_CONNECTED, (name));
        });
        socket.on('disconnect', () => {
            const userName = users.removeUser(socket.id);
            io.emit(USERS_COUNT, users.userCount);
            io.emit(USER_DISCONNECTED, (userName));
        });

        socket.on(ADD_MESSAGE, (message) => {
            const { userName } =  users.participants[socket.id];
            const createdAt = new Date();
            messages.push({ userName, message, createdAt });
            console.log(messages);
            socket.broadcast.emit(NEW_MESSAGE, ({ message, userName, createdAt }));
        });
    });
};
