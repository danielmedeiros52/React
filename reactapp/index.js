const express = require('express')
const app = express()

const pg = require('pg');
const conString = "postgres://postgres:postgres@localhost/futiba";

app.use(express.static('public'))
app.set('view engine','ejs')
app.get('/',(req , res)=>{
    res.render('home')
})


pg.connect(conString, function(err, client, done) {

  if (err) {
    return console.error('Authentication failed ', err);
  }


  client.query('SELECT * FROM  pg_stat_activity', function(err, result) {
      done();
      
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.console);
  
});
pg.end()
});

app.listen(3000, err => {
    console.log("Server on...")
})

//https://stackoverflow.com/questions/36120435/verify-database-connection-with-pg-promise-when-starting-an-app