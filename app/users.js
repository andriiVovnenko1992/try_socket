const users = {
    participants: {},
    userCount: 0,
    addUser: function (socketId, userName) {
        this.userCount++;
        this.participants[socketId] = { userName };
    },
    removeUser: function (socketId) {
        this.userCount--;
        const { userName } = this.participants[socketId];
        delete this.participants[socketId];
        return userName;
    },
};

module.exports = users;
