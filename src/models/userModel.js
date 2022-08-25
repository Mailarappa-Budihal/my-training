const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    balance: {
        type: Number,
        default: 100
    },
    adress: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "Others"] //"falana" will give an error
    },
    isFreeAppUser: {
        type: Boolean,
    },
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('UserDocument', userSchema) //users



// String, Number
// Boolean, Object/json, array