'use strict';

/**
 * @ngdoc overview
 * @name creditCardApp
 * @description
 * # creditCardApp
 *
 * Main module of the application.
 */
angular
  .module('creditCardApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant(
    'API', {
      baseUrl: 'http://localhost:3000/api/v1/',
      format: '.json'
    }
  )
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/cards/index.html',
        controller: 'CardsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cards/add', {
        templateUrl: 'views/cards/add.html',
        controller: 'CardAddCtrl'
      })
      .when('/cards/edit/:id', {
        templateUrl: 'views/cards/edit.html',
        controller: 'CardEditCtrl'
      })
      .when('/cards', {
        templateUrl: 'views/cards/index.html',
        controller: 'CardsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
