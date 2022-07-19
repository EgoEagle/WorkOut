const express = require('express')
const Workout = require('../models/workoutModel.js')
const router = express.Router()
const {
     createWorkout,
     getWorkout,
     getWorkouts


} = require('../controllers/workoutController')

//GET all
router.get('/' ,getWorkouts)
 

//GET a single
router.get('/:id', getWorkout)

//POST a workout
router.post('/', createWorkout)

//DELETE
router.delete('/:id', (req,res) => {
     res.json({mssg: 'DELETE a workout'})

})

//DELETE
router.patch('/:id', (req,res) => {
     res.json({mssg: 'Update a workout'})

})


module.exports = router