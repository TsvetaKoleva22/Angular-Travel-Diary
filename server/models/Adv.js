const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let adventureSchema = new mongoose.Schema({
  title: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'Adventure already exists.']},
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: REQUIRED_VALIDATION_MESSAGE },
  imageUrl: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  destination: {type: mongoose.Schema.Types.String},
  description: {type: mongoose.Schema.Types.String},
  author: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  creationDate: {type: mongoose.Schema.Types.Date, default: Date.now},
  likes: {type: mongoose.Schema.Types.Number, default: 0}
})

let Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure;
