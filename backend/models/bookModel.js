import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    bookAuthorName:{
        type:String,
        required:true
    },
    publishedYear:{
        type:Number,
        required:true
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    },
    bookImage:{
        type:String,
        required:true,
        default:""
    }
},{
    timestamps:true
})

export const Book = mongoose.model('Book',bookSchema);