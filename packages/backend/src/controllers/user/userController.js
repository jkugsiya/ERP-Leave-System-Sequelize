const models = require('../../models')
const { hash, compare } = require('bcrypt')
const jwt = require('jsonwebtoken')
const { TOKEN_SECRET, ACCESS_TOKEN_EXPIRE_TIME } = require('../../../config')
const { Op } = require('sequelize')

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await models.User.findAll({
      where: {
        id: {
          [Op.ne]: req.user.id
        }
      },
      attributes: { exclude: ['password'] }
    })
    return res.status(200).json(users)
  },
  createUser: async (req, res) => {
    const { name, email, password, role, position } = req.body
    if (!name || !email || !password || !role || !position) {
      return res.status(400).json({ message: 'Please fill all fields' })
    }
    const existing = await models.User.findOne({ where: { email } })
    if (existing) {
      return res.status(400).json({ message: 'User already exists' })
    }
    const user = await models.User.create({
      name,
      email,
      password: await hash(password, 10),
      role,
      position
    })

    const { password: _, ...userWithoutPassword } = user.dataValues
    return res.status(201).json({ ...userWithoutPassword })
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' })
    }
    const user = await models.User.findOne({ where: { email } })
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }
    const isPasswordCorrect = await compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Incorrect password' })
    }
    const iat = Math.floor(Date.now() / 1000)
    const exp = Math.floor(Date.now() / 1000) + ACCESS_TOKEN_EXPIRE_TIME
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, iat, exp },
      TOKEN_SECRET
    )
    const { password: _, ...userWithoutPassword } = user.dataValues
    return res.status(200).json({ ...userWithoutPassword, token, iat, exp })
  },
  deleteUser: async (req, res) => {
    const { id } = req.params
    const user = await models.User.findOne({ where: { id } })
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }
    await models.User.destroy({ where: { id } })
    return res.sendStatus(204)
  }
}
