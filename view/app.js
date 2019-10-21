
console.log("controller loaded");
//create a module(ebemailModule)
var ebExamclient = angular.module('ebExamModule',['ui.router',  'ngMaterial']);


//draftscontroller for draft.html file(api call for get all the saved emails)
ebExamclient.controller('examCycleController',function($scope,$http,$state,Notification){
    function examCycle(){  
        $http({ 
            method:'GET',
            url:'http://localhost:8888/api/examCycle',          
        })
        .then(function(response){
            // console.log(response.data);
            if(response!=null)
            {
             $scope.eCycle = response.data;
            }else{
            Notification ("Try another time!");
            }
        })
        .catch(function(error){
            console.log(error);
            Notification("Try another time!");
        });
    };
    examCycle();
});


 //Routing
ebExamclient.config(function($stateProvider,$urlRouterProvider){ 
  //  $urlRouterProvider.otherwise('/examCycle');   //if url is not matched with given urls then redirect to the 'send' state. 
    $stateProvider        
        .state('examCycle',{
            url:'/sent',
            templateUrl:"view/examCycle.html",
            controller:'exmaCycleController',
        })    
});








    