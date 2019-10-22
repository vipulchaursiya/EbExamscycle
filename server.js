const express=require('express');
const bodyparser=require('body-parser');
const morgan=require('Morgan')
const mongoose=require('mongoose');
const moment=require('moment');
let exam=require('./model/examschema.js');
var app=express();
app.use(express.static(__dirname));
app.use(morgan('dev'));

app.listen(8882,function(){console.log("server is running on 8882")})
app.use(morgan('dev'));

//connect mongodb with mongoose.connect method
mongoose.connect( 'mongodb://localhost:27017/exambazaar',{useNewUrlParser:true},function(err,connection) {    
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

app.get('/api/examcycles', function(req,res){
 exam.find({},{_id:0,name:1, cycle:1}, function(err,allExams){
    if(!err && allExams && allExams.length>0){
       console.log(allExams);
       res.json(allExams);
     }else{
       console.log("Error in retreiving the data!");
       console.log(err);
       res.json([]);
     }
 });
 


app.post('/api/examcalendar',function(req,res){
    
})


// var startTime = moment();
// console.log("Starting the fetch");
// exam.find({},{_id:0,'cycle':1}, function(err,allExams){
//     var endTime = moment();
//     var diff = endTime.diff(startTime, 'seconds');
//     console.log("hey");
//     console.log(diff);
//     if(!err && allExams && allExams.length>0){
//         console.log(allExams);
//     }else{
//         console.log("Error in retreiving the data!");
//         console.log(err);
//     }
// });
