var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
  $http.get('list.json')
       .then(function(res){
          $scope.todos = res.data;   
          $scope.tod = [
        {"titulo" : "El Juego de  Ender" ,"editorial" : "Edhasa"},
        {"titulo" : "Alfreds Futterkiste", "editorial" : "Ediciones B / Zeta"},
        {"titulo" : "Bon app", "editorial" : "Gigamesh"},
    ];
        });
});