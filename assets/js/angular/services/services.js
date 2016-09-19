angular.module('cPortal.services', []).
  factory('serviceApi', function($http) {
	 var serviceResponse = {};
	
	 serviceResponse.loginFormPost = function(loginForm) {
		//return $http.post('/api/authenticate',loginForm);
	};
	 
	 serviceResponse.registerFormPost = function(registerForm){
		 //return $http.post('/setup',registerForm);
	 };
	 	 
	 return serviceResponse;
});
