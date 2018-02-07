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

const init =  () => {

const connection = db.connect()

console.log('DILMAAAAAAAAA')
db.query('select*from users',[1],function(err,result){
done()
if(err){
  console.log('deu erro')
}
console.log(result.row[0].number)
})
  app.use(account)
  console.log(connection)
}
init()
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.listen(3000, err => {
  console.log("Server on...")
})

//https://stackoverflow.com/questions/36120435/verify-database-connection-with-pg-promise-when-starting-an-app


//#1 fullstack
//https://www.youtube.com/watch?v=2oAS7MtMwqA

//#2 postg
//https://www.youtube.com/watch?v=EBw5E5DzAvE
