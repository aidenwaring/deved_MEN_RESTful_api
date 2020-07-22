const express = require('express')
const app = express()
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
require('dotenv/config')

//Ensures that the app uses bodyParser to take JSON data from requests (POSTS)
app.use(bodyParser.json())

//Middleware
// app.use('/posts', () => {
//     console.log('This is middleware running')
// })

//Import Routes//
const postsRoute = require('./routes/posts')
//postsRoutes used as middleware, imported from posts.js
app.use('/posts', postsRoute)
const homeRoute = require('./routes/home')
app.use('/', homeRoute)
////////////////

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, {useNewURLParser: true}, () =>{
    console.log('Connected to DB')
})

//How we start listening to the server
app.listen(3000)