angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('main/todo.html',
    "je suis todo"
  );

}]);
