'use strict';

/**
 * @ngdoc function
 * @name creditCardApp.controller:CardsCtrl
 * @description
 * # CardsCtrl
 * Controller of the creditCardApp
 */
angular.module('creditCardApp')
  .controller('CardsCtrl', function ($scope, $http, API) {
  
  var host = API.baseUrl;
  
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
