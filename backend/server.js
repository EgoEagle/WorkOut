require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

console.log(process.env.MONGO_URI)
//express
const app = express()

//middleware
app.use(express.json())

app.use((req,res ,next) =>{
     console.log(req.path,req.method)
     next()
})

//routes
app.use('/api/workout',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
     .then(()=> {
          //listen to port
          app.listen(4000, () => {
               console.log('listening on port', process.env.PORT)

          })


     })

     .catch((error) => {
          console.log(error)
     })




