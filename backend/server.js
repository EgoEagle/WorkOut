require('dotenv').config()

const express = require('express')


//express
const app = express()


//routes
app.get('/',(req, res) => {
     res.json({mssg: 'Welcome 3'})

})


app.listen(process.env.PORT, () => {
     console.log('listening on port 4000')

})