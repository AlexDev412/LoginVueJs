const  { db } = require('../database');
const uuid = require('uuid');
const { checkPasswordExist, checkUserExist, checkUserAlreadyConnected } = require('./login.errorhandling');

async function Login(app) {
    app.post('/login', (req, res) => {
        const { username, password } = req.body;
        
        if (!checkUserExist(username)) {
            res.status(400).send(JSON.stringify({ msg: "User does not exist.", status: 400}));
            return;
        }
        if (!checkPasswordExist(username, password)) {
            res.status(400).send(JSON.stringify({ msg: "Wrong password.", status: 400}));
            return;
        }
        if (!checkUserAlreadyConnected(username)) {
            res.status(400).send(JSON.stringify({ msg: "User already connected.", status: 400}));
            return;
        }
        else {
            let arrayIndex = db.findIndex(obj => obj.username === username)
            db[arrayIndex].id = uuid.v1();
            res.status(200).send(JSON.stringify({ msg: "User login successfully.", status: 200}));
            return;
        }
    })
}

module.exports = { Login }