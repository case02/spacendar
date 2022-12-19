// dependencies
const express = require('express')
const app = express()
// const app = require('express').express()
const cors = require('cors')
require('./models')
require('dotenv').config()
const PORT = process.env.PORT
const userCtrl = require('./controllers/users')
const postCtrl = require('./controllers/posts')


//middleware
// cross origin allowance
app.use(cors())
// parse the body data
app.use(express.urlencoded({extended: true }))
app.use(express.json())

//routes
app.use('/user', userCtrl)
app.use('/post', postCtrl)


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})