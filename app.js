const express = require('express');
const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()
const connectDB = require('./db/db.connect')
const tasks = require('./routes/Task.routes')
const { mongoURI } = require('./creds')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
// CORS
var cors = require('cors')
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 ,
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }
//middleware
// app.use(express.static('./public'))
app.use(express.json())
//Routes
app.use('/api/v1/tasks', cors(corsOptions), tasks)


app.use(notFound)
app.use(errorHandler)


const start = async () => {
    try {
        await connectDB( mongoURI || process.env.MONGO_URI )
        app.listen(port , console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


start()