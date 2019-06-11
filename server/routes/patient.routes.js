const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/patient.controller')
const router = Router()

// Admin
// /api/patient/admin
router.post(
  '/admin',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.create
)

router.get(
  '/admin',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
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
// /api/patient
router.post(
  '/',
  ctr.create
)

module.exports = router