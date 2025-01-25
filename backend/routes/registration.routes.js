const express= require('express');
const router = express.Router();
const multer=require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const app=express();
const eventSchema=require('../models/event.model');
const festSchema=require('../models/fest.model');


app.use(express.json())

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

router.get('/registrationss',async (req,res)=>{
    const eventt=await eventSchema.findOne({fest_name:'oracl', event_name:'juju'});
    if(!eventt){
        return res.status(404).send('Event not found');
    }
    
    const festss=await festSchema.findOne({fest_name:"zeitgeist"});
    if(!festss){
        return res.status(404).send('Fest not found');
    }
    
    var arr={'fest_photo':festss.fest_photo,'event_photo':eventt.event_photo,'event_members':eventt.event_members};
    console.log(arr)
    
    res.json(arr);
    })
module.exports=router;