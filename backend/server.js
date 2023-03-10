// dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
require('./models')
require('dotenv').config()
const PORT = process.env.PORT
// access controllers
const userCtrl = require('./controllers/users')
const commentCtrl = require('./controllers/comments')


//middleware
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))
// cross origin allowance
app.use(cors())
// parse the body data
app.use(express.urlencoded({extended: true }))
app.use(express.json())
//routes
app.use('/user', userCtrl)
app.use('/comment', commentCtrl)
// any other route not matching the routes above gets routed by React
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
})