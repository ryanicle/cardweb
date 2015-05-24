'use strict';

/**
 * @ngdoc function
 * @name creditCardApp.controller:CardEditCtrl
 * @description
 * # CardEditCtrl
 * Controller of the creditCardApp
 */
angular.module('creditCardApp')
  .controller('CardEditCtrl', function ($scope, $http, $routeParams, $location) {
    var host = 'http://192.168.100.100:3000/api/v1/';
    $http({
      url: host + 'cards/' + $routeParams.id + '.json',
      method: 'GET'
    }).success(function (data, status) {
      $scope.card = data;
    }).error(function (data, status) {
      console.log(status);
    });

    $scope.months = [
      { label: 'Janurary', id: 1 },
      { label: 'February', id: 2 },
      { label: 'March', id: 3 },
      { label: 'April', id: 4 },
      { label: 'May', id: 5 },
      { label: 'June', id: 6 },
      { label: 'July', id: 7 },
      { label: 'August', id: 8 },
      { label: 'September', id: 9 },
      { label: 'October', id: 10 },
      { label: 'November', id: 11 },
      { label: 'December', id: 12 }
    ];
    var currentYear = 2015;
    $scope.years = [];
    for (var i = 0; i <= 5; i++) {
      $scope.years.push({label: currentYear + i, id: currentYear + i});
    }

    $scope.providers = [
      { label: 'Visa', id: 'visa' },
      { label: 'Mastercard', id: 'mastercard' },
      { label: 'AmericanExpress', id: 'americanexpress' },
      { label: 'Diner', id: 'diner' },
      { label: 'Discovery', id: 'discovery' }
    ];

    $scope.save = function () {
      $http({
        url: host + 'cards/' + $scope.card.id + '.json',
        method: 'PUT',
        data: $scope.card
      }).success(function (data, status) {
        if (status == 200) {
          $location.path('cards');
        }
      });
    };
  });
