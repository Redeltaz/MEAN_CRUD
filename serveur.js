require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, err => {
    if (err) throw err
    console.log('database connected')
})

const userRouter = require('./routes/routes')
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})