const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const mainRouter = require('./routes/index');
app.use('/', mainRouter);

const port = process.env.BACKEND_PORT || 5000;
mongoose.connect('mongodb+srv://user:superstrongpassword@testing.f3qii.mongodb.net/?retryWrites=true&w=majority&appName=Testing').then(()=>{
  console.log("DB Connected")
  app.listen(port, () => {
    console.log(`Backend service listening at http://localhost:${port}`);
  });
}).catch((err)=>{
  console.log("DB Connection Error");
  console.error(err)
});