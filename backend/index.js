// const express = require('express')
import express from'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import chatbotRoutes from './routes/chatbot.route.js';
import cors from 'cors'
//Middleware
const app = express()

app.use(cors());

dotenv.config()

const port =process.env.PORT|| 3000

//Middleware
app.use(express.json());

//Databse Connection Code
 mongoose.connect(process.env.MONGO_URL)
 .then(()=>{
  console.log("Connected to Mongoose")
 }).catch((error)=>{
  console.log("Error  Connecting to MongoDB ",error)
 })

 //Defining ROutes
 app.use("/bot/v1/",chatbotRoutes)



app.listen(port, () => {
  console.log(`server is running on  ${port}`)
})
