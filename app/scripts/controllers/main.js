'use strict';

angular.module('KeishaChickoree.TriniTaxCalculator')

  .controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });
