'use strict';

/**
 * @ngdoc function
 * @name creditCardApp.controller:CardAddCtrl
 * @description
 * # CardAddCtrl
 * Controller of the creditCardApp
 */
angular.module('creditCardApp')
  .controller('CardAddCtrl', function ($scope, $http, $routeParams, $location, API) {
    
    var host = API.baseUrl;
    $http({
      url: host + 'cards.json',
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
        url: host + 'cards.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          name: $scope.card.name,
          number: $scope.card.number,
          expired_month: $scope.card.expired_month,
          expired_year: $scope.card.expired_year,
          security_code: $scope.card.security_code,
          provider: $scope.card.provider,
          interest_rate: $scope.card.interest_rate,
          category: $scope.card.category,
          image: $scope.card.image
        }
      }).success(function (data, status) {
        $location.path('cards');
      });
    };
  });
