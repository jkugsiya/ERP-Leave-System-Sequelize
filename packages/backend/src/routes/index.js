const router = require('express').Router()
const userRoutes = require('./user/userRoutes')
const { verifyUser } = require('../auth/verifyUser')

router.get('/', (req, res) => {
  res.send('Hello World!')
})
router.use('/api/user', verifyUser, userRoutes)
// router.use('/leave', leaveRoutes)

module.exports = router
