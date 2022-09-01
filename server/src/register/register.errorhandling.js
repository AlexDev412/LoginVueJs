const { db } = require('../database');

function getUser(username) {
    let res = db.find(obj => obj.username === username);
    return res ? true : false;
}

module.exports = { getUser };