const express = require('express')
const Workout = require('../models/workoutModel.js')
const router = express.Router()

//GET all
router.get('/' ,(req, res) => {
     res.json({messg: 'GET all workouts'})

})

//GET a single
router.get('/:id', (req,res) => {
     res.json({mssg: 'GET a single workout'})

})

//POST a workout
router.post('/', async(req ,res)=> {
     const {title,load, reps} = req.body

     try{
          const workout = await Workout.create({title,load,reps})
          res.status(200).json(workout)
     } catch (error){
          res.status(400).json({error: error.message})

     }
})

//DELETE
router.delete('/:id', (req,res) => {
     res.json({mssg: 'DELETE a workout'})

})

//DELETE
router.patch('/:id', (req,res) => {
     res.json({mssg: 'Update a workout'})

})


module.exports = router