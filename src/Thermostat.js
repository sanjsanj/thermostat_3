var Thermostat = function() {
  this._temp = 20;
  this._powerSaving = true;

  Thermostat.prototype.temp = function () {
    return this._temp;
  };

  Thermostat.prototype.up = function () {
    if (this._powerSaving && this._temp < 25) {
      this._temp ++;
    } else if (!this._powerSaving && this._temp < 32) {
      this._temp ++;
    };
  };

  Thermostat.prototype.down = function () {
    if (this._temp > 10) {
      this._temp --;
    };
  };

  Thermostat.prototype.powerSaving = function () {
    return this._powerSaving;
  };

  Thermostat.prototype.toggle = function () {
    this._powerSaving = !this._powerSaving;
  };
};
