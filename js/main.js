var app = angular.module('revealApp', []);

  app.controller('Controller', ['$scope', '$http', function($scope, $http) {
        $scope.counter = 0;

        // read main data as title
        $http.get('data/main.json')
           .then(function(res){
             $scope.entity = res.data;
            });

        // read index page
        $http.get('data/index.json')
           .then(function(res){
             $scope.indexPage = res.data;
           });

        $scope.setCounterValue = function(pos){
            $scope.counter = pos;
        };

        $scope.nextItem = function() {
          $scope.li = $scope.indexPage[getCounterValue()];
        };
  }]);
