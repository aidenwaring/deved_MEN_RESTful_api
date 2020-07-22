const express = require('express')
const router = express.Router()

//ROUTES

// /home
router.get('/', (req, res) => {
    res.send('We are on home')
})
// /home/contact
router.get('/contact', (req, res) => {
    res.send('Contact me')
})

module.exports = router