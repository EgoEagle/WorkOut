const express = require('express')

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
router.post('/', (req ,res)=> {
     res.json({mssg: 'POST a new workout'})
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