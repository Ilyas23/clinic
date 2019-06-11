const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/service.controller')
const router = Router()

// Admin
// /api/service/admin
router.post(
  '/admin',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.create
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.remove
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.update
)

// Base
// /api/service
router.get(
  '/',
  ctr.getAll
)

router.get(
  '/:id',
  ctr.getById
)

module.exports = router