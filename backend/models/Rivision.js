const mongoose = require('mongoose');

const connectSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    address:{
        type: String,

    },
    Uid:{
        type:Number,
    }

})
const rev =  mongoose.model("Gauravrivi",connectSchema);
module.exports = rev;

