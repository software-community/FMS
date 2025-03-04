const express= require('express');
const app = express();
const cors = require('cors');
const { Cashfree } = require('cashfree-pg');

const eventRoutes = require('./routes/addevent.routes');
const paymentGateway = require('./routes/paymentGateway');

const dotenv=require('dotenv')
dotenv.config()


const connectToDB=require('./config/db');
connectToDB();

const eventSchema=require('./models/event.model');
app.set('view engine','ejs');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

Cashfree.XClientId = process.env.CLIENT_ID
Cashfree.XClientSecret = process.env.CLIENT_SECRET
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/',eventRoutes);
app.use('/gateway',paymentGateway);

app.listen(3000,(req,res)=>{
    console.log('Server is running on port 3000');
});