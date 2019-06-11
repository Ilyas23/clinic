const Service = require('../models/service.model')

module.exports.create = async (req, res) => {
  const service = new Service({
    title: req.body.title,
    text: req.body.text,
    imageUrl: `/${req.file.filename}`
  })

  try {
    await service.save()
    res.status(201).json(service)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const service = await Service.find()
    res.json(service)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
    res.json(service)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try{
    await Service.deleteOne({_id: req.params.id})
    res.json({message: 'Услуга удалена'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try{
    const service = await Service.findOneAndUpdate(
      {_id: req.params.id},
      req.body.form,
      {new: true}
    )
    res.json(service)
  } catch (e) {
    res.status(500).json(e)
  }
}