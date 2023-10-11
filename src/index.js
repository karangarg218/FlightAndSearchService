const express = require('express')
const {PORT}=require('./config/server')
const setupAndStartServer = async()=>{
    //create express object
    const app=express()
   
    app.listen(PORT,()=>{
         console.log(`started on port ${PORT}`)
         
    })


}
setupAndStartServer()