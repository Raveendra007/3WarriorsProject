'use strict';

angular.module('myApp.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'user/user.html',
    controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', ['$scope', function($scope) {
function init(){
  $scope.viewOverview = true;
  $scope.viewAccountSettings = false;
  $scope.searchAnything = false;
  $scope.searchOptions =['Name', 'Employee Id', 'Team'];
  $scope.user = {'name' : 'Bhaskar Matam', 'designation' : 'Software Engineer'};
  $scope.userDetails = $scope.currentUser = {'empId' : '01987', 'emailId' : 'bhagat@freedom.com','team': 'KatyFlyers', 'mobileNumber': '+91-9493645007', 'voipNumber': '+71-402-544-4848', 'deskLocation': 'B6-064'};
};

function resetFlags(){
  $scope.viewOverview = false;
  $scope.viewAccountSettings = false;
  $scope.searchAnything = false;
};

$scope.viewOverviewFun = function(){
  resetFlags();
  $scope.viewOverview = true;
  $scope.userDetails = $scope.currentUser;
};

$scope.viewAccountSettingsFun = function(){
  resetFlags();
  $scope.viewAccountSettings = true;
};

$scope.onClickSearchMenu = function(){
  resetFlags();
  $scope.searchAnything = true;
}

$scope.search = function(){
  //if(angular.isDefined($scope.searchType) && angular.isDefined($scope.searchPhrase)){
    $scope.userResult = [{'name' : 'Firoz Khan', 'designation' : 'Senior Software Engineer', 'teams': ['Core', 'Iris'], 'deskLocation':'B6-063'},{'name' : 'Raveendra Yadav', 'designation' : 'Software Engineer', 'teams':['KatyFlyers'], 'deskLocation':'B6-065'}];
  //} else alert('Please Select SearchCriteria');
};

$scope.getTeamDetails = function(team){
  $scope.userResult = [{'name' : 'Firoz Khan', 'designation' : 'Senior Software Engineer', 'teams': ['Core', 'Iris'], 'deskLocation':'B6-063'},{'name' : 'Raveendra Yadav', 'designation' : 'Software Engineer', 'teams':['KatyFlyers'], 'deskLocation':'B6-065'},{'name' : 'Firoz Khan', 'designation' : 'Senior Software Engineer', 'teams': ['Core', 'Iris'], 'deskLocation':'B6-063'},{'name' : 'Raveendra Yadav', 'designation' : 'Software Engineer', 'teams':['KatyFlyers'], 'deskLocation':'B6-065'}];
};

$scope.selectedCabin = function(userdeskLocation){
  $('span.link').removeClass('selectedPlace');
  //have to add code to remove the class from previously selected place
  $('#'+userdeskLocation.replace('-','')).addClass('selectedPlace');
};

/*$scope.onCloseDeskLocationModal = function(){
  $('span.link').removeClass('selectedPlace');
}*/
init();
}]);
