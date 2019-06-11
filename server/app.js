const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const authRoutes = require('./routes/auth.routes')
const scheduleRoutes = require('./routes/schedule.routes')
const serviceRoutes = require('./routes/service.routes')
const newsRoutes = require('./routes/news.routes')
const patientRoutes = require('./routes/patient.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({extended: true}), bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/schedule', scheduleRoutes)
app.use('/api/service', serviceRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/patient', patientRoutes)

module.exports = app