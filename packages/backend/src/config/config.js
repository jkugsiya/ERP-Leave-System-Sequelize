const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT
} = require('../../config')

module.exports = {
  development: {
    username: DB_USER || 'root',
    password: DB_PASSWORD || null,
    database: DB_NAME || 'database_development',
    host: DB_HOST || '127.0.0.1',
    dialect: DB_DIALECT || 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: DB_USER || 'root',
    password: DB_PASSWORD || null,
    database: DB_NAME || 'database_development',
    host: DB_HOST || '127.0.0.1',
    dialect: DB_DIALECT || 'postgres'
  }
}
