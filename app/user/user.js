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
};

$scope.viewOverviewFun = function(){
  $scope.viewOverview = true;
  $scope.viewAccountSettings = false;
};

$scope.viewAccountSettingsFun = function(){
  $scope.viewOverview = false;
  $scope.viewAccountSettings = true;
};
init();
}]);
