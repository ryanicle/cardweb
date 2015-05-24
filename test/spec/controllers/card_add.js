'use strict';

describe('Controller: CardAddCtrl', function () {

  // load the controller's module
  beforeEach(module('creditCardApp'));

  var CardAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardAddCtrl = $controller('CardAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
