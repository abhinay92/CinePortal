angular.module("cPortal", [ 'cPortal.controllers',
							'cPortal.services',
							'cPortal.constants',
							'ngRoute',
							'ngDialog',
  							'ngFileUpload'	
	]).config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
		when("/home", {controller: "cPortalHomeController",templateUrl:"features/home.html" }).
		when("/profile", {controller: "cPortalProfileController",templateUrl:"features/profile.html" }).
		when("/profile/images", {controller: "",templateUrl:"" }).
		otherwise({redirectTo: '/home'});
}]);