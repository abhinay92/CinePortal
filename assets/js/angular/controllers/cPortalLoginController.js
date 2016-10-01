angular.module("cPortal.controllers")
.controller("cPortalLoginController",function ($scope,auth,serviceApi,store,$location) {
				 

	function onLoginSuccess(profile, token) {
	    store.set('profile', profile);
	    store.set('token', token);
	    $location.path('/profile');
	  }

	  function onLoginFailed() {
   		 $scope.message.text = 'invalid credentials';
    	 $scope.loading = false;
  	  }

	  $scope.doGoogleAuthWithPopup = function () {
	    auth.signin({
	      popup: true,
	      connection: 'google-oauth2',
	      scope: 'openid name email'
	    }, onLoginSuccess, onLoginFailed);
	  };

});