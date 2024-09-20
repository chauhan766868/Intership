const mongoose = require('mongoose');


const connectSchema =new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        },
        mobile:{
            type:Number
        },
        password:{
            type: Number

        }

})

const user = mongoose.model("Gauravuser",connectSchema);
module.exports = user;