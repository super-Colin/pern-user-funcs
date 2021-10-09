const { Pool } = require('pg')


// heroku provided connection string or construct string from dev env vars
const connectionString = process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`; 


const pool = new Pool({
  connectionString: connectionString,
})


module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}