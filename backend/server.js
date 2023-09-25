require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')
const businessRoutes = require('./routes/business')
const exploreRoutes = require('./routes/explore')

//express app
const app = express();

//Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors({
 origin: "*"   
}))

//routes
app.use('/api/user', userRoutes)
app.use('/api/business', businessRoutes)
app.use('/api/explore', exploreRoutes)

//connect to db
//mongoose.connect(process.env.MONGO_URI)

mongoose.connect("mongodb+srv://AaronCanales01:OctaneTW1@milestoneproject2.5b61vwy.mongodb.net/MSP3-Self-Promotion-Website", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })

//listen for requests
app.listen(process.env.PORT || 3005, () => {
    console.log('connected to mongo and listening on port ', process.env.PORT);
})