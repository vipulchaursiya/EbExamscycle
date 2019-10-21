const express=require('express');
const bodyparser=require('body-parser');
const morgan=require('Morgan')
const mongoose=require('mongoose');
let exam=require('./model/examschema.js');
var app=express();
app.use(express.static(__dirname));
app.use(morgan('dev'));

app.listen(8881,function(){console.log("server is running on 8881")})
app.use(morgan('dev'));

//connect mongodb with mongoose.connect method
mongoose.connect( 'mongodb://localhost:27017/ebexamdata',{useNewUrlParser:true},function(err,connection) {    
    if(!err){
        console.log("database connection established");
   }
   else{
       // handling intial connection error  
       console.log("connection not established");
       console.log(err);
   }
});

//display index.html file
app.get('/',function(req,res){  
    res.sendFile(__dirname + '/view/index.html');
});

