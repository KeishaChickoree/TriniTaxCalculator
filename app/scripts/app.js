'use strict';

/**
 * @ngdoc overview
 * @name triniTaxCalculatorApp
 * @description
 * # triniTaxCalculatorApp
 *
 * Main module of the application.
 */
angular
  .module('triniTaxCalculatorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/current_summary', {
        templateUrl: 'views/current_summary.html',
        controller: 'SummaryCtrl'
      })
      .when('/enter_details', {
        templateUrl: 'views/enter_details.html',
        controller: 'DetailsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
