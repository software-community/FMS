const express= require('express');
const router = express.Router();
const multer=require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

const eventSchema=require('../models/event.model');
const festSchema=require('../models/fest.model');

router.get('/addevent',(req,res)=>{
    res.render('event');
});

router.post('/addevent',upload.single('files'),async (req,res)=>{
    const fest_name=req.body.fest_name.toLowerCase();
    const event_name=req.body.event_name;
    const event_day=req.body.event_day;
    const event_head_name=req.body.event_head_name;
    const email=req.body.event_head_email;
    const mobile_no=req.body.event_head_mobile;
    const event_desc=req.body.event_description;
    const start_time=req.body.event_start;
    const end_time=req.body.event_end;

    const imageFile = req.file.path;
    const event_photo = fs.readFileSync(imageFile, { encoding: 'base64' });
    
    const newUser=await eventSchema.create({
        event_name,
        event_day,
        event_head_name,
        email,
        mobile_no,
        event_desc,
        start_time,
        end_time,
        fest_name,
        event_photo

    })
    res.redirect('http://localhost:5173/addevent'); //add url where u wan to redirect again and again when events are submitted
});

router.get('/fest',(req,res)=>{
    res.render('fest');
})

router.post('/fest',upload.single('file'), async (req,res)=>{

    imageFile=req.file.path;

    const fest_name=req.body.fest_name_addfest.toLowerCase();
    const fest_from=req.body.fest_from_addfest;
    const fest_to=req.body.fest_to_addfest;
    const fest_location=req.body.fest_location_addfest;
    const fest_head_name=req.body.fest_head_name_addfest;
    const fest_head_email=req.body.fest_head_email_addfest;
    const fest_head_mobile=req.body.fest_head_mobile_addfest;
    const fest_desc=req.body.fest_description_addfest;
    const fest_photo = fs.readFileSync(imageFile, { encoding: 'base64' });

    const newUser= await festSchema.create({
        fest_name,
        fest_from,
        fest_to,
        fest_head_name,
        fest_location,
        fest_head_email,
        fest_head_mobile,
        fest_desc,
        fest_photo  
    })
    console.log(req.body);
    
    res.redirect('http://localhost:5173/addevent'); //add url where u wan to redirect after fest details are submitted when events are submitted
})

router.post('/received',(req,res)=>{
    // req.redirect('/Home');
    res.send('Data Received'); //add url where u wan to redirect after fest details and all event details are submitted
})

module.exports = router;