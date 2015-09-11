'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/index.html',
    controller: 'loginPageCtrl'
  });
}])

.controller('loginPageCtrl', [function($scope) {

  $scope.verifyLogin = function(){
    if($scope.searchForm.emailId === 'Hai'){
      $scope.searchForm.emailId = "OK";
    }
  }

}]);
