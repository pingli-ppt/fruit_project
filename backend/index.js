const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()
app.use(cors())
app.use(express.json())

// 数据库连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'fruit'
})

db.connect(err => {
  if (err) {
    console.error('数据库连接失败', err)
  } else {
    console.log('数据库连接成功')
  }
})

// 测试接口
app.get('/api/test', (req, res) => {
  res.json({ msg: '后端启动成功' })
})

// 登录接口
app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  const sql = 'SELECT * FROM user WHERE username=? AND password=?'
  db.query(sql, [username, password], (err, results) => {
    if (results.length > 0) {
      res.json({ success: true })
    } else {
      res.json({ success: false })
    }
  })
})

app.listen(3000, () => {
  console.log('后端运行在 http://localhost:3000')
})
// 获取水果数据
app.get('/api/fruits', (req, res) => {
  const sql = 'SELECT * FROM fruit_data'
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err })
    } else {
      res.json(results)
    }
  })
})
