const express = require('express')

const app = express()

//Middleware
// app.use('/posts', () => {
//     console.log('This is middleware running')
// })

//ROUTES
//app.get app.post app.delete app.patch
app.get('/', (req, res) => {
    res.send('We are on home')
})

app.get('/posts', (req, res) => {
    res.send('We are on posts')
})

//How we start listening to the server
app.listen(3000)