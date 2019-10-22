
console.log("controller loaded");
//create a module(ebemailModule)
var ebExamclient = angular.module('ebExamModule',['ui.router',  'ui-notification', 'ngMaterial']);


//draftscontroller for draft.html file(api call for get all the saved emails)
ebExamclient.controller('examCycleController',function($scope,$http,$state,Notification){
    function examCycle(){  
        $http({ 
            method:'GET',
            url:'http://localhost:8882/api/examCycle',
          
        })
        .then(function(response){     
            console.log(response);      
             $scope.examcycles = response.data;
        })
        .catch(function(error){
            console.log(error);
            Notification("Try another time!");
        });
    };
    examCycle();
});


 //Routing
ebExamclient.config(function($stateProvider){ 
  //  $urlRouterProvider.otherwise('/examCycle');   //if url is not matched with given urls then redirect to the 'send' state. 
    $stateProvider        
        .state('examCycle',{
            url:'/examCycle',
            templateUrl:"view/examCycle.html",
            controller:'examCycleController',
        })    
});








    