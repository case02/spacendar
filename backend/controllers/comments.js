const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')

function isAuthenticated(req, res, next){
    if(req.headers.authorization){
        next()
    } else {
        res.sendStatus(401)
    }
}

// create route
router.post('/', isAuthenticated, async (req, res) => {
    const createdComment = await db.Comment.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdComment.user = decoded.id
    createdComment.save()
    res.json(createdComment)
})

// index route
router.get('/', async (req, res) => {
    const allComments = await db.Comment.find({}).populate('user')
    res.json(allComments)
})

// show route
router.get('/:id', async (req, res) => {
    const foundComment = await db.Comment.findById(req.params.id).populate('user')
    res.json(foundComment)
})

//update
router.put('/:id', isAuthenticated, async (req, res) => {
    const foundComment = await db.Comment.findById(req.params.id)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    if(foundComment.user == decoded.id){
        const updatedComment = await db.Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.json(updatedComment)
    }
    const updatedComment = await db.Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(updatedComment)
})

//delete
router.delete('/:id', isAuthenticated, async (req, res)=> {
    await db.Comment.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router