import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minLength:8,
        required:true
    },
    avatar:{
        type:String,
    },
    savedBook:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    }]
},{
    timestamps:true
})

export const User = mongoose.model('User',userSchema)