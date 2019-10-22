const express=require('express');
const bodyparser=require('body-parser');
const morgan=require('Morgan')
const mongoose=require('mongoose');
const moment=require('moment');
let exam=require('./app/model/exams');
var app=express();
app.use(express.static(__dirname));
app.use(morgan('dev'));

app.listen(8882,function(){console.log("server is running on 8882")})
app.use(morgan('dev'));

//connect mongodb with mongoose.connect method
mongoose.connect( 'mongodb://localhost:27017/ebExamData',{useNewUrlParser:true},function(err,connection) {    
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
    console.log("in");
    var startTime = moment();
    // exam.find({},{_id:0,name:1, cycleNumber:1,year:1},
exam.aggregate([
{
 $group:{
               _id:'$name',
               cycleNumber: {$addToSet: '$cycle.cycleNumber'},
               year: {$addToSet: '$cycle.year'},
               registration: {$addToSet: '$cycle.examdates.registration.start._date',
                               $addToSet: '$cycle.examdates.registration.end._date'},
        
               admitCard: {$addToSet: '$cycle.examdates.admitCard.start._date',
                            $addToSet: '$cycle.examdates.admitCard.end._date'},
        
               examDate: {$addToSet: '$cycle.examdates.examDate.start._date',
                          $addToSet: '$cycle.examdates.examDate.end._date'},
        
               writtenResultDate: {$addToSet: '$cycle.examdates.writtenResultDate.start._date',
                                   $addToSet: '$cycle.examdates.writtenResultDate.end._date'},
        
               counselling: {$addToSet: '$cycle.examdates.counselling.start._date',
                            $addToSet: '$cycle.examdates.counselling.end._date'},
        
               interview: {$addToSet: '$cycle.examdates.interview.start._date',
                           $addToSet: '$cycle.examdates.interview.end._date'},
  },
}
]).then(function(Doc){
   console.log(Doc)
   res.json(Doc);
}).catch(function(err){
 console.log("Error in retreiving the data!");
 console.log(err);
 });
 });


// app.post('/api/examcalendar',function(req,res){

//     exam.find({})
// })


var startTime = moment();
console.log("Starting the fetch");
exam.find({},{_id:0,'cycle':1}, function(err,allExams){
    var endTime = moment();
    var diff = endTime.diff(startTime, 'seconds');
    console.log("hey");
    console.log(diff);
    if(!err && allExams && allExams.length>0){
        console.log(allExams);
    }else{
        console.log("Error in retreiving the data!");
        console.log(err);
    }
});
