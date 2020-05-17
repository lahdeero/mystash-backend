const { Pool } = require('pg')

require('dotenv').config()

// const config = {
//   user: process.env.PGUSER,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
//   max: 10, // max number of connection can be open to database
//   idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
// }

// const pool = new pg.Pool(config)

console.log('node_env = ', process.env.NODE_ENV)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  ssl: false,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: false // since we dont run in heroku anymore
// })

// client.connect()

module.exports = {
  query: (text, params) => pool.query(text, params),
  // poolQuery: (text, params) => pool.query(text, params),
  connect: () => pool.connect(),
  end: () => pool.end()
}
