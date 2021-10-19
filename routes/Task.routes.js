// const taskControllers = require('../controllers/tasks.controllers')
const {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask
} = require('../controllers/Task.controllers')

const express = require('express');
const router = express.Router()

router.get('/' , getAllTasks)
router.post('/', createTask)
router.get('/:id' , getTask)
router.patch('/:id' , updateTask)
router.delete('/:id' , deleteTask)


module.exports = router

