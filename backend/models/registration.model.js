const mongoose = require('mongoose');
const registSchema = new mongoose.Schema({
        team_name:{
            type:String,
            required:true,
            trim:true,
            //unique:true,
            minlength: [2,'Team Leader name must be longer']
        },
        leader_name:{
            type:String,
            required:true,
            trim:true,
            //unique:true,
            minlength: [2,'Team Leader name must be longer']
        },
        leader_phone:{
            type:Number,
            requirerd:true,
            trim:true,
            //unique:true,
            minlength:[10,'Phone number ust be longer']
        },
        leader_email:{
            type:String,
            required:true,
            trim:true,
            //unique:true,
            minlength:[2,'Email must be longer']
        },
        team_member_name:{
            type:Array,
            trim:true
        }

});
const regist=mongoose.model('members',registSchema);
module.exports=regist;