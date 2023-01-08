const express = require('express')
const mysql = require('mysql')
require('dotenv').config();
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  port: "3306",
  user: 'root',
  password: process.env.PASSWORD,
  database: 'check_list'
})

connection.connect()


app.get('/', (req, res) => {
  const id = req.body.id
  const table = req.body.table
  let list = require("./module/crew_list")
  let crew_list = list.item
  connection.query(`SELECT * FROM crew WHERE id = 1`, (error, results) => {
    let data = results[0]
    let count = 1
    data = Object.values(data)
    console.log(data)
    crew_list.forEach((list) => {
      list.check_list.forEach((item) => {
        item.check = data[count]
        count++
      })
    }) 
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(crew_list)
  })
})




app.listen(8080, () => {
  console.log(`Example app listening on port 8080`)
})
