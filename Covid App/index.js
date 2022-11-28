const express = require('express');
const {join} = require('path')
const app = express();

const PORT = 5000;
app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'html','covidHome.html'));
})
app.get('/covidHome.css',(req,res)=>{
    res.sendFile(join(__dirname,'css','covidHome.css'));
})
app.get('/covidAdmin.html',(req,res)=>{
    res.sendFile(join(__dirname,'html','covidAdmin.html'));
})

const hostName = "127.0.0.9";

app.listen(PORT,hostName,()=>{
    console.log(`server started with ${hostName}:${PORT}`);
})