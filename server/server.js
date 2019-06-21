const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParse.json());

app.get('/',function(req,res){
    res.send("Hello from Server ");   
})

app.get('/addcontact',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Data recive"})
})

app.listen(PORT,function(){
    console.log("Server running on localhost: "+PORT);
})