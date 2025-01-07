const express= require('express');
const router = express.Router();
const multer=require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

const registSchema=require('../models/registration.model');

router.post('/registration',async (req,res)=>{
    const team_name=req.body.team_name;
    const leader_name=req.body.leader_name;
    const leader_phone=req.body.leader_phone;
    const leader_email=req.body.leader_email;
    // const team_member_name=req.body.team_member_name;

    const newUser=await registSchema.create({
        team_name,
        leader_name,
        leader_phone,
        leader_email,
        team_member_name
    })
    res.redirect('http://localhost:5173/registration');
})

router.post('received',(req,res)=>{
    res.send("Team Registered");
})

module.exports=router;