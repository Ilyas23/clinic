const {Schema, model} = require('mongoose')

const patientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String
  },
  date: {
    type: Date
  },
  time: {
    type: Date
  },
  comment: {
    type: String
  }
})

module.exports = model('patients', patientSchema)