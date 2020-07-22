const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

//ROUTES
// /posts
router.get('/', (req, res) => {
    res.send('We are on posts')
})
// /posts/specific
router.get('/specific', (req, res) => {
    res.send('Specific post')
}) 

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    //Save Post
    // post.save()
    // .then(data => {
    //     res.json(data)
    // })
    // .catch(err => {
    //     res.json({message: err})
    // })
})


module.exports = router