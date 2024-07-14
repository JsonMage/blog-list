const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')

app.use(express.json())
app.use('/api/blogs', blogsRouter)
app.use(cors())

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('Connected to MongoDB.')
    })
    .catch(err => {
        logger.error('Error connecting to MongoDB:', err)
    })

module.exports = app