thermostat.controller('ThermostatController', [function() {

var self = this;

self._temp = 20;
self._powerSaving = true;

  self.temp = function() {
    return self._temp;
  };

  self.up = function() {
    if (self._powerSaving && self._temp < 25) {
      self._temp ++;
    } else if (!self._powerSaving && self._temp < 32) {
      self._temp ++;
    };
  };

  self.down = function() {
    if (self._temp > 10) {
      self._temp --;
    };
  };

  self.powerSaving = function() {
    return self._powerSaving;
  };

  self.toggle = function() {
    self._powerSaving = !self._powerSaving;
  };

  self.resetButton = function() {
    self._temp = 20;
  };
}]);
