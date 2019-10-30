var ebExamclient = angular.module('ebExamModule',['ui.router',  'ui-notification', 'ngMaterial']);



ebExamclient.controller('examCycleController',function($scope,$http,Notification){
    function examCycle(){  
        $http({ 
            method:'GET',
            url:'http://localhost:8882/api/examcycles',
          
        })
        .then(function(response){
            if(response){
                $scope.allExamCycles = response.data;
            }          
        })
        .catch(function(error){
            console.log(error);
            Notification("Try another time!");
        });
        
    };
    examCycle();
    var counter=0;
   
    $scope.showHideFilter= function(){  
        console.log($scope.IsVisible);        
       if(counter==0){
        $scope.IsVisible  =  true;
        counter=1;
       }
       else if(counter==1){
        $scope.IsVisible  =  false;
        counter=0;  
       }
    }
    $scope.checkAll = function(){
        $scope.checkall = true;
       }
     
       $scope.uncheckAll = function(){
        $scope.checkall = false;
       }
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
        .state('examCalender',{
            url:'/examcalender',
            templateUrl:"view/examCalender.html",
            controller:"examCalenderController"
        })   
});








    