const {
  getAllUsers,
  createUser,
  loginUser
} = require('../../controllers/user/userController')

const router = require('express').Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.post('/login', loginUser)

module.exports = router
