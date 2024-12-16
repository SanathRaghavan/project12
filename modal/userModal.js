//import  mongoose
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    },
    profile:{
        type:String
    }
})

const comments = mongoose.model("comments",userSchema)

module.exports = comments