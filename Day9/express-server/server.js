const PORT = 8000

const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('hello world')
})

app.get('/api/auth/login',(req, res) => {
    res.send('welcome to login')
})


app.listen(PORT, function () {
    console.log(`server is running on port ${PORT}`);
})

