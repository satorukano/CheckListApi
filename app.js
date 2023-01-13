const express = require('express')
const mysql = require('mysql')
require('dotenv').config();
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


const connection = mysql.createConnection({
  host: 'localhost',
  port: "3306",
  user: 'root',
  password: process.env.PASSWORD,
  database: 'check_list'
})

connection.connect()


app.post('/', (req, res) => {
  const id = req.body.id
  const table = req.body.table
  let list = require("./module/crew_list")
  let crew_list = list.item
  connection.query('SELECT * FROM crew WHERE id = ?', [id], (error, results) => {
    let data = results[0]
    let count = 1
    data = Object.values(data)
    crew_list.forEach((list) => {
      list.check_list.forEach((item) => {
        item.check = data[count]
        count++
      })
    }) 
    res.send(crew_list)
  })
})

app.get('/member', (req, res) => {
  connection.query('SELECT * FROM name', (error, results) => {
    let data = results[0]
    res.send([data])
  })
})

app.post('/edit', (req, res) => {
  const id = req.body.id
  const table = req.body.table
  const data = req.body.data
  data.forEach((list) => {
    list.check_list.forEach((item) => {
      connection.query('UPDATE crew SET ?? = ? WHERE id = 1', [item.id, item.check], (error, results) => {
        if (error) {
          res.send("error")
        }
      })
    })
  })
})




app.listen(8080, () => {
  console.log(`Example app listening on port 8080`)
})
