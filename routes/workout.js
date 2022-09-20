const express = require('express')
const Workout = require('../models/workoutModel.js')
const router = express.Router()
const {
     createWorkout,
     getWorkout,
     getWorkouts,
     deleteWorkout,
     updateWorkout
////////

} = require('../controllers/workoutController')

//GET all
router.get('/' ,getWorkouts)
 

//GET a single
router.get('/:id', getWorkout)

//POST a workout
router.post('/', createWorkout)

//DELETE
router.delete('/:id', deleteWorkout)

//DELETE
router.patch('/:id', updateWorkout)


module.exports = router
