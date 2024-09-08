//Yeh schema hmne user ke lie create kra hai
//user means jo hmare wesbite chlaegee koi bhi user

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phoneNumber: {
        type: Number,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum:['Undergraduate Student' , 'Postgraduate Student'],
        required:true    
    },
    profile: {
        bio:{type:String},
        skills: [{type : String}],
        resume:{type:String},//Url to resume file yeh cloudinary se aaega
        resumeOriginalName:{type:String},
        company: {type:mongoose.Schema.Types.ObjectId, ref:'Company'},//making realtion table between use and company. company table abhi bnaege
        profilePhoto:{
            type:String,
            default:""
        }
    },
},{timestamps:true});

export const User = mongoose.model('User' , userSchema);  