require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workout')


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


app.listen(4000, () => {
     console.log('listening on port', process.env.PORT)

})