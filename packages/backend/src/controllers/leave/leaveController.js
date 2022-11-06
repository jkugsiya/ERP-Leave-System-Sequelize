module.exports = {
  getAllLeaves: async (req, res) => {
    const leaves = await models.Leave.findAll({
      where: {
        approverId: req.user.id
      }
    })
    return res.status(200).json(leaves)
  },
  getUserLeaves: async (req, res) => {
    if (!req.user) return res.sendStatus(403)
    const leaves = await models.Leave.findAll({
      where: { userId: req.user.id }
    })
    return res.status(200).json(leaves)
  },
  createLeave: async (req, res) => {
    const { startDate, endDate, description, approverId, leaveType } = req.body
    if (!req.user) return res.sendStatus(403)
    if (!startDate || !endDate || !description) {
      return res.status(400).json({ message: 'Please fill all fields' })
    }
    if (approverId === req.user.id) {
      return res
        .status(400)
        .json({ message: 'You cannot approve your own leave' })
    }
    const leave = await models.Leave.create({
      startDate,
      endDate,
      description,
      userId: req.user.id,
      approverId: approverId,
      leaveType
    })
    return res.status(201).json(leave)
  },
  updateLeaveStatus: async (req, res) => {
    const { id } = req.params
    const { status } = req.body
    const leave = await models.Leave.findOne({
      where: { id }
    })
    if (!leave) {
      return res.status(400).json({ message: 'Leave not found' })
    }
    if (leave.approverId !== req.user.id) {
      return res.status(400).json({ message: 'You are not the approver' })
    }
    await models.Leave.update(
      { status },
      {
        where: { id }
      }
    )
    return res.status(200).json({ message: 'Leave status updated' })
  }
}
