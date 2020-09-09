const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/home', (req, res)=>{
    res.send('Welcome to my first backend!')
})

app.get('/main', (req, res)=>{
    res.sendFile('/media/user/data1/b172/minggu4/backend/html/form.html')
})

app.post('/data', (req, res)=>{
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(8080, ()=>{
    console.log('App Listening on port 8080')
})

