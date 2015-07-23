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

  it('max temp is 25 with power saving on', function() {
    for (var i = 0; i < 20; i ++) {
      ctrl.up();
    };
    expect(ctrl.temp()).toEqual(25);
  });

  it('max temp is 32 with power saving off', function() {
    ctrl.toggle();
    for (var i = 0; i < 20; i ++) {
      ctrl.up();
    };
    expect(ctrl.temp()).toEqual(32);
  });

  it('can toggle power saving mode', function() {
    ctrl.toggle();
    expect(ctrl.powerSaving()).toEqual(false);
  });

  it('power saving mode brings temp back into range', function() {
    ctrl.toggle();
    for (var i = 0; i < 20; i ++) {
      ctrl.up();
    };
    ctrl.toggle();
    expect(ctrl.temp()).toEqual(25);
  });

  it('can reset the temp', function() {
    ctrl.up();
    ctrl.resetButton();
    expect(ctrl.temp()).toEqual(20);
  });
});
