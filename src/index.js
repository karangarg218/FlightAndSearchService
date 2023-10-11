const express = require('express');
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const city = require('./repository/city-repository')
const setupAndStartServer = async()=>{
    //create express object
    const app=express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,async ()=>{
         console.log(`started on port ${PORT}`)

       
    })


}
setupAndStartServer()