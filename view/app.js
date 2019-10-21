

//create a module(ebemailModule)
var ebExamclient = angular.module('ebeExamModule',['ui.router', 'ui-notification', 'ngMaterial']);


//draftscontroller for draft.html file(api call for get all the saved emails)
ebExamclient.controller('exmaCycleController',function($scope,$http,$state,Notification){
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

//function for open button to open the draft-
//input-thisEmail , expected output-thisEmail and send thisEmail to the 'send' state for updation.
$scope.open=function(thisEmail)
{    
    $state.go('send', {thisEmail: thisEmail });
}
});


 //Routing
ebemailclient.config(function($stateProvider,$urlRouterProvider){ 
    $urlRouterProvider.otherwise('/examCycle');   //if url is not matched with given urls then redirect to the 'send' state. 
    $stateProvider        
        .state('examcycle',{
            url:'/examCycle',
            templateUrl:"view/examCycle.html",
            controller:'exmaCycleController',
        })    
});








    