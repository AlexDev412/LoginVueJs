const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');


////////////////////////////////////////////////////////////////
const { Register } =  require('./register/register.controller');
const { Login } = require('./login/login.controller');
////////////////////////////////////////////////////////////////

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//////Register/////
Register(app);
//////Login///////
Login(app);

app.listen(port, () => {
    console.log("server listening on port " + port);
})