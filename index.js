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

app.post('/profile', (req, res)=>{
    res.send(req.data)
})

let data = {
    name: 'Rush',
    batch: '17.2',
    email: 'rusher@mail.com'
}

app.patch('/profile', (req, res)=>{
    data = {
        ...data,
        ...req.body
    }
    res.send(data)
})

app.listen(8080, ()=>{
    console.log('App Listening on port 8080')
})

