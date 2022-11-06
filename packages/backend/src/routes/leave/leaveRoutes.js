const { verifyAdmin } = require('../../auth/verifyUser')
const {
  getAllLeaves,
  getUserLeaves,
  createLeave,
  updateLeaveStatus
} = require('../../controllers/leave/leaveController')

const router = require('express').Router()

router.get('/', verifyAdmin, getAllLeaves)
router.get('/user', getUserLeaves)
router.post('/', createLeave)
router.post('/update/:id', verifyAdmin, updateLeaveStatus)
