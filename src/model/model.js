const mongoose = require('mongoose');


const diamSchema = new mongoose.Schema({

    email:{type:String},
    password:{type:String},
    image:String,
    donor:String




});



const keeperSchema = new mongoose.Schema({

    name:{type:String},
    surname:{type:String},
    middleName:{type:String},
    address:String,
    phoneNumber:String,
    accountNumber:String,
    salary:String,




});

const   diamModel = mongoose.model('diamModel',diamSchema);
const   keeperModel = mongoose.model('keeperModel',keeperSchema);


module.exports = {
    diamModel,
    keeperModel

};