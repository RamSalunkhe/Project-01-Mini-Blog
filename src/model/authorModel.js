//=====================Importing Module and Packages=====================//
const mongoose = require('mongoose')

//=====================Creating Author Schema=====================//
const authorSchema = new mongoose.Schema({

    fname: { type: String, require: true, trim: true },
    lname: { type: String, require: true, trim: true },
    title: { type: String, emun: ["Mr", "Mrs", "Miss"], require: true },
    email: { type: String, lowercase: true, require: true, unique: true, trim: true },
    password: { type: String, require: true, minimum: 8, trim: true }

}, { timestamps: true }
)


//=====================Module Export=====================//
module.exports = mongoose.model('Author', authorSchema) 