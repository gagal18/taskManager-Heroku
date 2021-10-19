const express = require('express');
const app = express()
const port = 3000
require('dotenv').config()
const connectDB = require('./db/db.connect')
const tasks = require('./routes/Task.routes')

//middleware
app.use(express.static('./public'))
app.use(express.json())
//Routes
app.use('/api/v1/tasks' , tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


start()