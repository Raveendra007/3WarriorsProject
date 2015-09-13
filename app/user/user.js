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

$scope.search = function(){
  resetFlags();
  $scope.searchAnything = true;
}

$scope.selectedCabin = function(){
  $('#'+$scope.userDetails.deskLocation.replace('-','')).addClass('selectedPlace');
};
init();
}]);
