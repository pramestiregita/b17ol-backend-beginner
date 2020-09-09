const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.get('/home', (req, res)=>{
    res.send('Welcome to my first backend!')
})

app.post('/data', (req, res)=>{
    console.log(req.body)
})

app.listen(8080, ()=>{
    console.log('App Listening on port 8080')
})

