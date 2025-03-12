import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    uploadedBook:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    }],
    savedBook:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    }],
    isAdmin:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
})
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            name: this.name,
            email: this.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_TIMEPERIOD
        }
    );
};

export const User = mongoose.model('User',userSchema)