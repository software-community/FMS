const mongoose=require('mongoose');

const festSchema = new mongoose.Schema({
     fest_from:{
        type:String,
        required:true
    },

    fest_to:{
        type:String,
        required:true
    },

    fest_name:{
        type:String,
        required:true,
        trim:true
    },

    fest_location:{
        type:String,
        required:true,
        trim:true
    },

    fest_head_name:{
        type:String,
        required:true,
        trim:true  
    },

    fest_head_email:{
        type:String,
        required:true,
        trim:true
    },

    fest_head_mobile:{
        type:Number,
        required:true,
        trim:true
    },

    fest_desc:{
        type:String,
        required:true,
        trim:true
    },

    fest_photo:{
        type:String,
        required:false,
        trim:true
    }
})

const fest=mongoose.model('fest',festSchema);
module.exports=fest;