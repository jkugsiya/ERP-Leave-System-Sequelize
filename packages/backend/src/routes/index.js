const router = require('express').Router()
const userRoutes = require('./user/userRoutes')

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.use('/api/user', userRoutes)
// router.use('/leave', leaveRoutes)

module.exports = router
