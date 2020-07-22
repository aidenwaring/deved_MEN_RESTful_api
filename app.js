const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const PORT = 3000;

// const bodyParser = require('body-parser')
require('dotenv/config')

//Ensures that the app uses bodyParser to take JSON data from requests (POSTS)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

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
// mongoose.connect(
//     process.env.DB_CONNECTION, {useNewURLParser: true}, () =>{
//     console.log('Connected to DB')
// })

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u1mch.mongodb.net/<dbname>?retryWrites=true&w=majority`,(err)=>{
        if(err) throw err
        console.log("DB Connected Successfully")
    }
)

//How we start listening to the server
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})