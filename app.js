const express = require('express')
const mysql = require('mysql')
const checklist = require("./module/checklist")
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
  database: 'check_list',
  multipleStatements: true
})

connection.connect()

const list_dic = {
  crew: checklist.crew,
  skipper: checklist.skipper
}




app.post('/', (req, res) => {
  const id = req.body.id
  const table = req.body.table
  console.log(table)
  let send_list = list_dic[table]
  connection.query('SELECT * FROM ?? WHERE id = ?', [table, id], (error, results) => {
    let data = results[0]
    let count = 1
    data = Object.values(data)
    send_list.forEach((list) => {
      list.check_list.forEach((item) => {
        item.check = data[count]
        count++
      })
    })
    res.send(send_list)
  })
})


app.get('/member', (req, res) => {
  connection.query('SELECT * FROM name', (error, results) => {
    let data = results
    res.send(data)
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

app.post('/add', (req, res) => {
  const user = req.body.user_name
  connection.query('INSERT INTO name (name) VALUES(?); INSERT INTO crew () VALUES(); INSERT INTO skipper () VALUES()',
    [user], (error, results) => {
      if (error) {
        console.log(error)
        res.send("error")
      } else {
        const result_id = results[0].insertId
        res.send({id: result_id})
      }
    })
})




app.listen(8080, () => {
  console.log(`Example app listening on port 8080`)
})
