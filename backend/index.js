const express= require('express');
const app = express();

const eventRoutes = require('./routes/addevent.routes');

const dotenv=require('dotenv')
dotenv.config()


const connectToDB=require('./config/db');
connectToDB();

const eventSchema=require('./models/event.model');
app.set('view engine','ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/',eventRoutes);

app.listen(3000,(req,res)=>{
    console.log('Server is running on port 3000');
});