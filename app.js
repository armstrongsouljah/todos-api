const express = require('express');
const mogooose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes')
require('dotenv').config()

const { DATABASE_URL } = process.env
const { PORT } = process.env || 4000
const app = express()

// add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/todos', todoRoutes);

// connect db
mogooose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false })
    .then(() => {
        app.listen(PORT, () => console.log('Server running on port: ', PORT))
    })
    .catch(error => console.error(error))