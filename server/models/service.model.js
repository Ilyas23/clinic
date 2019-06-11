const {Schema, model} = require('mongoose')

const serviceSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  text: {
    type: String,
    required: true
  },
  imageUrl: String
})

module.exports = model('services', serviceSchema)