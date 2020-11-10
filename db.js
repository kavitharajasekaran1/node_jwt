const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.DB_connect, {useUnifiedTopology: true,useNewUrlParser: true,retryWrites:false })
// mongoose.connect("mongodb://localhost:27017/node-demo",{useUnifiedTopology: true,useNewUrlParser: true })
.then(() => {
    console.log('connected to mongoDB');
})
.catch((error) => {
    console.log('Some error Occured in Connecting with DataBase',error);
});