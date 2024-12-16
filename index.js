//import dotenv

require('dotenv').config()//lods the environment

//import express
const express = require('express')
//import cors
const cors = require('cors')
//import router
const router = require('./routes')
//import mongodb connection file
require('./connection')

//create server 
const pfServer = express()


//to connect with frontend
pfServer.use(cors())

//parse json formate- json()
pfServer.use(express.json())

//router
pfServer.use(router)
           


//static - method is used to export a folde/file from the sernerside
//first argument - the name is which other application(frontend)

pfServer.use('/uploads',express.static('./uploads'))

//port
const PORT = 4000 || process.env.PORT

//Server checking the request recieved at PORT
pfServer.listen(PORT,()=>{
    console.log(`server running successfuy at port number ${PORT}`);
})


//logic
 /* pfServer .get('/get',(req,res)=>{
    res.send(`get request recieved`)
})

pfServer .post('/post',(req,res)=>{
    res.send(`post request recieved`)
})

pfServer .put('/put',(req,res)=>{
    res.send(`put request recieved`)
})

pfServer .delete('/delete',(req,res)=>{
    res.send(`delete request recieved`)
})
 

 */




