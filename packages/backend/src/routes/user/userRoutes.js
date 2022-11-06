const { verifyAdmin } = require('../../auth/verifyUser')
const {
  getAllUsers,
  createUser,
  loginUser,
  deleteUser
} = require('../../controllers/user/userController')

const router = require('express').Router()

router.get('/', verifyAdmin, getAllUsers)
router.post('/', verifyAdmin, createUser)
router.post('/login', loginUser)
router.get('/delete/:id', verifyAdmin, deleteUser)

module.exports = router
