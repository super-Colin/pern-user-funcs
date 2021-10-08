
const connectionString = process.env.NODE_ENV === 'production' ? 
process.env.DATABASE_URL : // heroku provided connection string

`postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${PGPORT}/${process.env.PGDATABASE}`; //construct string from dev env vars



const { Pool } = require('pg')


'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'

const pool = new Pool({
  connectionString: connectionString,
})



module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}