const { getUser } = require('./register.errorhandling');
const { db } = require('../database');
const uuid = require('uuid');

async function Register(app) {
    app.post('/register', (req, res) => {
        const { username, password } = req.body;

        if (password.length === 0) {
            res.status(400).send(JSON.stringify({ msg: 'You need a password.', status: 400}));
            return;
        }
        if (!getUser(username)) {
            db.push({ username: username, password: password, id: ""});
            res.status(200).send(JSON.stringify({ msg: 'Successfully registered.', status: 200}));
            return;
        }
        else {
            res.status(400).send(JSON.stringify({ msg: 'User already registered.', status: 400}));
            return;
        }
    })
}

module.exports = { Register }