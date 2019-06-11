const {Schema, model} = require('mongoose')

const newsSchema = new Schema({
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

module.exports = model('news', newsSchema)