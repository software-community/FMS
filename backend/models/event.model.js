const mongoose=require('mongoose');
const eventSchema = new mongoose.Schema({
    fest_name:{
        type:String,
        required:true,
        trim:true,
        // unique:true,
        minlength: [2,'Username must be 3 characters long']
    },
    event_name:{
        type:String,
        required:true,
        trim:true,
        // unique:true,
        minlength: [2,'Username must be 3 characters long']
    },
    event_desc:{
        type:String,
        required:true,
        trim:true,
        minlength: [2,'Username must be 3 characters long']
    },
    event_day:{
        type:Number,
        required:true,
        trim:true,
    },
    event_head_name:{
        type:String,
        required:true,
        trim:true,
        minLength:[3,"Invalid Name"]
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minLength:[11,'Invalid Email']
    },
    mobile_no:{
        type:Number,
        required:true,
        trim:true,
        minLength:[10,'Invalid Mobile Number']
    },
    start_time:{
        type:String,
        required:true,

    },
    end_time:{
        type:String,
        required:true
    },

    event_photo:{
        type:String,
        required:true,
        trim:true
    }
});
const event=mongoose.model('event',eventSchema);
module.exports=event;