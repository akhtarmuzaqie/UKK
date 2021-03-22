//Dependency
const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

//initianilyze connection to DB
const db = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database: 'laporan'
})

//Connect to DB
db.connect((err) =>{
    if(err) throw err
    console.log("Database Connected");
})

//Export the module and ready to use
module.exports = db;