const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: {
type: String

    },
    email:{
        type: String
    },
    mobile:{
        type: Number
    },
    desc:{
        type:String
    }

})
const Cont = mongoose.model("GauravContact",contactSchema);
module.exports = Cont;