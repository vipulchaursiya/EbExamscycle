const express=require('express');
const morgan=require('Morgan')
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const exams=require('./app/model/exams.js');
var app=express();
 app.use(express.static(__dirname));
app.use(morgan('dev'));
app.use(bodyparser.json());
app.listen(8882,function(){console.log("server is running on 8882")})
mongoose.connect( 'mongodb://localhost:27017/ebExamData',{useNewUrlParser:true},function(err,connection) {    
    if(!err){
        console.log("database connection established");
        console.log(mongoose.connection.readyState);
      //  console.log(connection);
   }
   else{
       // handling intial connection error  
       console.log("connection not established");
       console.log(err);
   }
});
app.get('/',function(req,res){  
    res.sendFile(__dirname + '/view/index.html');
});
app.get('/api/examCycle',function(req,res){  
   // res.json("  hello")
    exams.find({},function(err,examData){
        if(!err){
            console.log(examData);
            res.json(examData);
             
        }
    })
})


