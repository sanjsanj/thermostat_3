describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temp()).toEqual(20);
  })

  it('can increase temp with the \'up\' button', function() {
    thermostat.up();
    expect(thermostat.temp()).toEqual(21);
  });

  it('can decrease temp with the \'down\' button', function() {
    thermostat.down();
    expect(thermostat.temp()).toEqual(19);
  });

  it('has a minimum temp of 10 degrees', function() {
    for (var i = 0; i < 20; i ++) {
      thermostat.down();
    };
    expect(thermostat.temp()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.powerSaving()).toEqual(true);
  });

  it('has power saving toggle button', function() {
    thermostat.toggle();
    expect(thermostat.powerSaving()).toEqual(false);
  });
});
