const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
  dogid: { type: String, required: true },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model('Dog', dogSchema);
