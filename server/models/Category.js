const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let categorySchema = mongoose.Schema({
  name: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: true}
})

let Category = mongoose.model('Category', categorySchema)

module.exports = Category;
module.exports.seedCategory = () => {
  Category.find({}).then(cats => {
    if (cats.length > 0) return

    Category.create({
      name: 'General'
    })
  })
}
