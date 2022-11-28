require('dotenv').config()
module.exports = {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  DB_PORT: process.env.DB_PORT,
  PORT: process.env.PORT,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRE_TIME: process.env.ACCESS_TOKEN_EXPIRE_TIME
    ? parseInt(process.env.ACCESS_TOKEN_EXPIRE_TIME)
    : 3600
}
