const express = require('express')
const mysql = require('mysql')
const checklist = require("./module/checklist")
require('dotenv').config();
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


const db_config = {
  host: process.env.HOST,
  port: "3306",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true
}

let connection

function handleDisconnect() {
  console.log('INFO.CONNECTION_DB: ');
  connection = mysql.createConnection(db_config);

  //connection取得
  connection.connect(function (err) {
    if (err) {
      console.log('ERROR.CONNECTION_DB: ', err);
      setTimeout(handleDisconnect, 1000);
    }
  });

  //error('PROTOCOL_CONNECTION_LOST')時に再接続
  connection.on('error', function (err) {
    console.log('ERROR.DB: ', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('ERROR.CONNECTION_LOST: ', err);
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

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


app.get('/', (req, res) => {
  res.send("OK")
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
        res.send({ id: result_id })
      }
    })
})

app.delete("/delete", (req, res) => {
  const user_id = req.body.user_id
  connection.query('DELETE FROM name WHERE id = ?; DELETE FROM crew WHERE id = ?; DELETE FROM skipper WHERE id = ?',
    [user_id, user_id, user_id], (error, results) => {
      if (error) {
        console.log(error)
        res.send("error")
      } else {
        res.send({ result: results })
      }
    })
})




app.listen(port, () => {
  console.log(`Example app listening on port 8080`)
})
