const models = require('../../models')
const { hash } = require('bcrypt')

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await models.User.findAll({
      attributes: { exclude: ['password'] }
    })
    return res.status(200).json(users)
  },
  createUser: async (req, res) => {
    const { name, email, password, role, position } = req.body
    if (!name || !email || !password || !role || !position) {
      return res.status(400).json({ message: 'Please fill all fields' })
    }
    const user = await models.User.create({
      name,
      email,
      password: await hash(password, 10),
      role,
      position
    })
    const { password: _, ...userWithoutPassword } = user.dataValues
    return res.status(201).json(userWithoutPassword)
  }
}
