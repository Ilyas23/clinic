const nodemailer = require("nodemailer")
const moment = require('moment')
const Patient = require('../models/patient.model')

module.exports.create = async (req, res) => {
  const patient = new Patient({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
    comment: req.body.comment
  })

  async function main(){
    let transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: 'uteuov.95@mail.ru',
        pass: '12321988551551ilyas'
      }
    });
  
    let info = await transporter.sendMail({
      from: `Заявка на прием от ${patient.name} <uteuov.95@mail.ru>`,
      to: "uteuov.95@mail.ru",
      subject: `Заявка на прием от ${patient.name}`,
      text: "Hello world?",
      html: `<span>ФИО: <b>${patient.name}</b></span><br /><br />
             <span>Телефон: <b>${patient.phone}</b></span><br /><br />
             <span>E-mail: <b>${patient.email}</b></span><br /><br />
             <span>Желательное время записи: <b>${moment(patient.date).locale('ru').format('LL')} - ${moment(patient.time).locale('ru').format('LT')}</b>
             </span><br /><br />
             <span>Комментарий: <b>${patient.comment}</b></span>`
    });
  }

  try {
    await patient.save()
    await main().catch(console.error);
    res.status(201).json(patient)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const patient = await Patient.find()
    res.json(patient)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id)
    res.json(patient)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try{
    await Patient.deleteOne({_id: req.params.id})
    res.json({message: 'Запись удалена'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try{
    const patient = await Patient.findOneAndUpdate(
      {_id: req.params.id},
      req.body.form,
      {new: true}
    )
    res.json(patient)
  } catch (e) {
    res.status(500).json(e)
  }
}