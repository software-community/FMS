const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  data: String,
});

exampleModel = mongoose.model('Example', exampleSchema);
module.exports = exampleModel;