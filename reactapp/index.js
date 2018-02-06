const express = require('express')
const app = express()
const account = require('./account')
const initOptions = {
  error: (error, e) => {
    if (e.cn) {
      console.log('CN:', e.cn)
      console.log('EVENT', error.message || error)
    }
  }
};

const pgp = require('pg-promise')(initOptions);
const db = pgp('postgres://postgres:postgres@localhost/futiba')
const init = async () => {
  const connection = await db.connect()
  console.log(connection)
  app.use(account)
}
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.listen(3000, err => {
  console.log("Server on...")
})

//https://stackoverflow.com/questions/36120435/verify-database-connection-with-pg-promise-when-starting-an-app