describe('Thermostat', function() {

  beforeEach(module('Thermostat'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ThermostatController');
  }));

  it('starts with temp at 20 degrees', function() {
    expect(ctrl.temp()).toEqual(20);
  });

  it('starts with power saving on', function() {
    expect(ctrl.powerSaving()).toEqual(true);
  });

  it('can increase temp', function() {
    ctrl.up();
    expect(ctrl.temp()).toEqual(21);
  });

  it('can decrease temp', function() {
    ctrl.down();
    expect(ctrl.temp()).toEqual(19);
  });

  it('can toggle power saving mode', function() {

  });

  it('can reset the temp', function() {

  });
});
