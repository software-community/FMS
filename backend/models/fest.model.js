const mongoose=require('mongoose');

const festSchema = new mongoose.Schema({
     fest_from:{
        type:String,
        required:false
    },

    fest_to:{
        type:String,
        required:false
    },

    fest_name:{
        type:String,
        required:false,
        trim:true
    },

    fest_location:{
        type:String,
        required:false,
        trim:true
    },

    fest_head_name:{
        type:String,
        required:false,
        trim:true  
    },

    fest_head_email:{
        type:String,
        required:false,
        trim:true
    },

    fest_head_mobile:{
        type:Number,
        required:false,
        trim:true
    },

    fest_desc:{
        type:String,
        required:false,
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