const Schedule = require('../models/schedule.model')

module.exports.create = async (req, res) => {
  const schedule = new Schedule({
    doctor: req.body.doctor,
    name: req.body.name,
    time: req.body.time
  })

  try{
    await schedule.save()
    res.status(201).json(schedule)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try{
    const schedule = await Schedule.find()
    res.json(schedule)
  } catch(e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try{
    const schedule = await Schedule.findById(req.params.id)
    res.json(schedule)
  } catch(e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try{
    await Schedule.deleteOne({_id: req.params.id})
    res.json({message: 'Строка удалена'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try{
    const schedule = await Schedule.findOneAndUpdate(
      {_id: req.params.id},
      req.body.row,
      {new: true}
    )
    res.json(schedule)
  } catch (e) {
    res.status(500).json(e)
  }
}