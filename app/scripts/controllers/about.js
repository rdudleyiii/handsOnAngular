'use strict';

/**
 * @ngdoc function
 * @name handsOnAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the handsOnAngularApp
 */
angular.module('handsOnAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
