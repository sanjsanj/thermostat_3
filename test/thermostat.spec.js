describe('ThermostatController', function() {

  beforeEach(module('Thermostat'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ThermostatController');
  }));

  describe('Initializes with', function() {
    it('temp at 20 degrees', function() {
      expect(ctrl.temp()).toEqual(20);
    });
  });
});
