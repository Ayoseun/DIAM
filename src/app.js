const express = require("express");
const  routes  = require("./routes/routes");
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
var xss = require('xss-clean')
const bodyParser = require('body-parser');


const app=express();
app.use(cors());
app.use(mongoSanitize());
app.use(xss())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit:"60mb"}));
app.use(express.json());
app.use('/mcs2',routes)
const mongoString ='mongodb+srv://Ayoseun:Jared15$@hack1.kkz3uwk.mongodb.net/sopaEreto';
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const listener=app.listen(process.env.PORT||3000,()=>{
    console.log(" app is running on "+listener.address().port);
})
