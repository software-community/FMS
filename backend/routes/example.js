const {Router} = require('express');
const exampleModel = require('../models/example');
// use the exampleModel or any other model as required
const hashPassword = require('../lib/example');
// use the hashPassword function or any other function as required

const router = Router();

router.get('/', (req, res) => {
  res.send('Example route');
});

router.get('/alpha', (req, res) => {
  res.send('Alpha page');
});

router.get('/beta', (req, res) => {
  res.send('Beta page');
});

module.exports = router;