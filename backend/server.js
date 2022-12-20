// dependencies
const express = require('express')
const app = express()
const cors = require('cors')
require('./models')
require('dotenv').config()
const PORT = process.env.PORT
// access controllers
const userCtrl = require('./controllers/users')
const commentCtrl = require('./controllers/comments')


//middleware
// cross origin allowance
app.use(cors())
// parse the body data
app.use(express.urlencoded({extended: true }))
app.use(express.json())
//routes
app.use('/user', userCtrl)
app.use('/comment', commentCtrl)


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})