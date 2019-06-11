const passport = require('passport')
const {Router} = require('express')
const ctr = require('../controllers/schedule.controller')
const router = Router()

// Admin
// /api/schedule/admin
router.post(
  '/admin',
  passport.authenticate('jwt', {session: false}),
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
// /api/schedule
router.get('/', ctr.getAll)

module.exports = router