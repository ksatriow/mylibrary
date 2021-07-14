const express = require('express')
const app = express()
const port = 3000

// basic middleman
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const router = require('./router')
app.use(router)

app.listen(port, () => console.log(`Running on your http://localhost:${port}`))