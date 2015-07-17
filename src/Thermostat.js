var Thermostat = function() {
  this._temp = 20;

  Thermostat.prototype.temp = function () {
    return this._temp;
  };
};
