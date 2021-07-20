const express = require('express')
const mogooose = require('mongoose')
require('dotenv').config()

const { DATABASE_URL } = process.env
const { PORT } = process.env || 4000
const app = express()

// connect db
mogooose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => console.log('Server running on port: ', PORT))
    })
    .catch(error => console.error(error))