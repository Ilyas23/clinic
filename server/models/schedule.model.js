const {Schema, model} = require('mongoose')

const scheduleSchema = new Schema({
  doctor: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  time: {
    type: Array
  }
})

module.exports = model('schedules', scheduleSchema)