console.clear();

const express=require("express");
const connectDB= require("./config/DBconnect")

const app=express();

require('dotenv').config();


connectDB();
app.use(express.json());

app.use("/api/contact",require("./routes/Contact"))









app.listen(process.env.PORT,(err)=>{ 
  err?console.log(err):console.log("server is runnnig")})