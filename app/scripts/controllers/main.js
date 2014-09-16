'use strict';

/**
 * @ngdoc function
 * @name handsOnAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the handsOnAngularApp
 */
angular.module('handsOnAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
