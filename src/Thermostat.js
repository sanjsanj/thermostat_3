var Thermostat = function() {
  this._temp = 20;

  Thermostat.prototype.temp = function () {
    return this._temp;
  };

  Thermostat.prototype.up = function () {
    this._temp ++;
  };

  Thermostat.prototype.down = function () {
    if (this._temp > 10) {
      this._temp --;
    };
  };
};
