const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../../config')

module.exports = {
  verifyUser(req, res, next) {
    if (req.originalUrl === '/api/user/login') return next()

    const token = req.headers['authorization']

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }
}
