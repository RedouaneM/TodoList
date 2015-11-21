'use strict';
angular.module('app', []);

var app = angular.module('app',
    ['ui.router',
      'ngResource',
      'ui.bootstrap',
    ]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '',
    templateUrl: 'main/todo.html',
    controller:'todoctrl',
  });
})
.controller('controller', function($scope, $log){
    $scope.test='redouane'

})
