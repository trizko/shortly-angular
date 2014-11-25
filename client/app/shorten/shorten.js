angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){

    Links.addLink($scope.link.link)
    .then(function(link){

      // $scope.data.links = links;
    })
    .catch(function(error){
      console.error(error);
    });
  };

});
