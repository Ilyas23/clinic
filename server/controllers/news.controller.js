const News = require('../models/news.model')

module.exports.create = async (req, res) => {
  const news = new News({
    title: req.body.title,
    text: req.body.text,
    imageUrl: `/${req.file.filename}`
  })

  try {
    await news.save()
    res.status(201).json(news)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const news = await News.find()
    res.json(news)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id)
    res.json(news)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try{
    await News.deleteOne({_id: req.params.id})
    res.json({message: 'Новость удалена'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try{
    const news = await News.findOneAndUpdate(
      {_id: req.params.id},
      req.body.form,
      {new: true}
    )
    res.json(news)
  } catch (e) {
    res.status(500).json(e)
  }
}