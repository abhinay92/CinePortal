angular.module("cPortal.controllers")
.controller("cPortalProfileController",function($scope,$rootScope,serviceApi,$location,auth){
	
  $scope.auth = auth;
    $scope.$watch('auth.profile.name', function(name) {
    if (!name) {
      return;
    }
    });

    
	 $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

 	  $('#myCarousel').carousel({
      interval: 6000
    });

    $scope.links =[
     { src:"http://www.conceptcarz.com/images/Suzuki/suzuki-concept-kizashi-3-2008-01-800.jpg", alt:"", caption:""},
     { src:"http://www.conceptcarz.com/images/Volvo/2009_Volvo_S60_Concept-Image-01-800.jpg", alt:"", caption:""},
     { src:"http://www.sleepzone.ie/uploads/images/PanelImages800x400/TheBurren/General/sleepzone_hostels_burren_800x400_14.jpg", alt:"", caption:""},
  ];  

		
});