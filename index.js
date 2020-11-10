const express = require("express");
const app = express()
const authRoute = require("./routes/auth");
const getmethod = require('./routes/getmethod')
const db = require("./db");
app.use(express.json());



//route middleware
app.use('/api/user',authRoute);
app.use('/api/getmethod',getmethod)
//middleware

app.listen(3000,()=>console.log("server is up and runnning"))