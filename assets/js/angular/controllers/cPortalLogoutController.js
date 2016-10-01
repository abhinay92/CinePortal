angular.module("cPortal.controllers")
.controller("cPortalLogoutController",function (auth, $scope, $location, store) {
  auth.signout();
  store.remove('profile');
  store.remove('token');
  $location.path('/login');
});