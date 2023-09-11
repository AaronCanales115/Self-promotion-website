require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./routes/user')

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
app.use('/api/user', User)

//connect to db
mongoose.connect()

//listen for requests
app.listen(process.env.PORT || 3005, () => {
    console.log('connected to mongo and listening on port ', process.env.PORT);
})