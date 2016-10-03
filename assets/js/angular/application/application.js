angular.module("cPortal", [ 'cPortal.controllers',
							'cPortal.services',
							'cPortal.constants',
							'cPortal.directives',
							'ngRoute',
							'ngDialog',
							'ngImgCrop',
  							'ngFileUpload',
  							'ngAnimate',
  							'ngCookies',
  							'auth0',
  							'angular-storage',
  							'angular-jwt'
  								
	]).config(['$routeProvider','authProvider', '$httpProvider',
  				'$locationProvider', 'jwtInterceptorProvider', function($routeProvider,authProvider, $httpProvider,
  $locationProvider, jwtInterceptorProvider) { 
	  $routeProvider.
	    when("/login", {controller: "cPortalLoginController",templateUrl:"features/login.html"}).
	    when("/logout", {controller: "cPortalLogoutController",templateUrl:"features/logout.html"}).
		when("/home", {controller: "cPortalHomeController",templateUrl:"features/home.html",requiresLogin: true}).
		when("/profile", {controller: "cPortalProfileController",templateUrl:"features/profile.html",requiresLogin: true }).
		when("/profile/images", {controller: "",templateUrl:"" }).
		otherwise({redirectTo: '/login'});

		$locationProvider.hashPrefix('!');

		 authProvider.init({
		    domain: 'cportal.auth0.com',
		    clientID: 'zZm1lh0UxN7fuFl4GkH9forc2ujgXDzL',
		    loginUrl: '/login'
		  });

		  jwtInterceptorProvider.tokenGetter = function(store) {
		    return store.get('token');
		  };

		  // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
		  // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
		  // want to check the delegation-token example
  		  $httpProvider.interceptors.push('jwtInterceptor');
	}]).run(function($rootScope, auth, store, jwtHelper, $location) {
  $rootScope.$on('$locationChangeStart', function() {
    if (!auth.isAuthenticated) {
      var token = store.get('token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          auth.authenticate(store.get('profile'), token);
        } else {
          $location.path('/login');
        }
      }
    }
  });
});