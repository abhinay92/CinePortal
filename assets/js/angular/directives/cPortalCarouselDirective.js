angular.module("cPortal.directives",[]).directive('icarousel', function($timeout) {
   return {
      restrict: 'E',
      scope: {
        links: '=' 
      },
      templateUrl: 'templates/directives/imageCarousel.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      }
   }
}).directive('vcarousel', function($timeout) {
   return {
      restrict: 'E',
      scope: {
        links: '=' 
      },
      templateUrl: 'templates/directives/videoCarousel.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      }
   }
}).directive('acarousel', function($timeout) {
   return {
      restrict: 'E',
      scope: {
        links: '=' 
      },
      templateUrl: 'templates/directives/audioCarousel.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      }
   }
});