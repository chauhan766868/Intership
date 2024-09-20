const mongoose = require('mongoose');


const connectSchema =new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
        },
        country:{
            type:String,
        },
        state:{
            type: String,

        },
        qualification:{
            type: String,
        },
        relegion:{
            type: String,
        }

})

const Employee = mongoose.model("gauravEmployee",connectSchema);
module.exports = Employee;