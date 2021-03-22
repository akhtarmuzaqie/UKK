const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const exjwt = require('express-jwt');
const db = require('./config/db.js')


//declare path
const Users = require('./routes/user.js')

//Running port
const port = process.env.PORT || 2324;

//Declare Express
const app = express()

//initialyze cors
app.use(cors());

//use Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

//Route
app.use('/', Users)

app.listen(port, () => {
    console.log(`It's Running on port ${port}`);

})