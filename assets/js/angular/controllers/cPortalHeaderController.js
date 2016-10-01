angular.module("cPortal.controllers")
.controller("cPortalHeaderController",function($scope,$rootScope,serviceApi,$location,auth){

$scope.go = function (target) {
    $location.path(target);
  };


});