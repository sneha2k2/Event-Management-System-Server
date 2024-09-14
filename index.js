const express = require('express');
const auth = require('./Middlewares/authMiddleware');

const user = require('./Routes/user.routes');
const event = require('./Routes/event.routes');
const connectDb = require('./Database/connect');
const cors = require('cors');

let app=express()

app.use(express.json())

app.use(cors())

// Endpoints
app.use("/api",user);
app.use("/api",auth,event);

// Creating Server


