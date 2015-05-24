'use strict';

/**
 * @ngdoc function
 * @name creditCardApp.controller:CardsCtrl
 * @description
 * # CardsCtrl
 * Controller of the creditCardApp
 */
angular.module('creditCardApp')
  .controller('CardsCtrl', function ($scope, $http) {
    var host = 'http://192.168.100.100:3000/api/v1/';
  
  $http({
    url: host + 'cards.json',
    method: 'GET'
  }).success(function (data, status) {
    $scope.cards = data;
  });

  $scope.edit = function(id) {
    
  };

  $scope.delete = function (id, index) {
    $http({
      url: host + 'cards/' + id + '.json',
      method: 'DELETE'
    }).success(function (data, status) {
      $scope.cards.splice(index, 1);
    }).error(function (data, status) {
      console.log(status);
    });
  };

});
