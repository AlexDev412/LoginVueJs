const { db } = require('../database');
const uuid = require('uuid');

function checkUserExist(username) {
    let res = db.find(obj => obj.username === username);
    return res ? true : false;
}

function checkUserAlreadyConnected(username) {
    let res = db.find(obj => obj.username === username);
    return res.id.length !== 0 ? false : true;
}

function checkPasswordExist(username, password) {
    let res = db.filter(obj => obj.username === username && obj.password === password);
    return res ? true : false;
}

module.exports = { checkPasswordExist, checkUserExist, checkUserAlreadyConnected };