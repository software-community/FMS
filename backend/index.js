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
app.listen(port, () => {
  console.log(`Backend service listening at http://localhost:${port}`);
});