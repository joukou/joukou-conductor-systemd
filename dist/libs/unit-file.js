var Install, Service, SystemDUnitFile, Unit, XFleet;

Service = require("./service");

Unit = require("./unit");

XFleet = require("./x-fleet");

Install = require("./install");

SystemDUnitFile = (function() {
  function SystemDUnitFile() {
    Object.defineProperty(this, "options", {
      get: this._getOptions
    });
    this.service = new Service();
    this.unit = new Unit();
    this.xFleet = new XFleet();
    this.install = new Install();
  }

  SystemDUnitFile.prototype.service = null;

  SystemDUnitFile.prototype.unit = null;

  SystemDUnitFile.prototype.xFleet = null;

  SystemDUnitFile.prototype.install = null;

  SystemDUnitFile.prototype._getOptions = function() {
    var installOptions, serviceOptions, unitOptions, xFleetOptions;
    serviceOptions = this.service.options || [];
    unitOptions = this.unit.options || [];
    xFleetOptions = this.xFleet.options || [];
    installOptions = this.install.options || [];
    return serviceOptions.concat(unitOptions, xFleetOptions, installOptions);
  };

  return SystemDUnitFile;

})();

module.exports = SystemDUnitFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdW5pdC1maWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLCtDQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsV0FBUixDQUFWLENBQUE7O0FBQUEsSUFDQSxHQUFVLE9BQUEsQ0FBUSxRQUFSLENBRFYsQ0FBQTs7QUFBQSxNQUVBLEdBQVksT0FBQSxDQUFRLFdBQVIsQ0FGWixDQUFBOztBQUFBLE9BR0EsR0FBYSxPQUFBLENBQVEsV0FBUixDQUhiLENBQUE7O0FBQUE7QUFPZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxJQUFBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLElBQXRCLEVBQTRCLFNBQTVCLEVBQXVDO0FBQUEsTUFDckMsR0FBQSxFQUFLLElBQUksQ0FBQyxXQUQyQjtLQUF2QyxDQUFBLENBQUE7QUFBQSxJQUdBLElBQUksQ0FBQyxPQUFMLEdBQW1CLElBQUEsT0FBQSxDQUFBLENBSG5CLENBQUE7QUFBQSxJQUlBLElBQUksQ0FBQyxJQUFMLEdBQWdCLElBQUEsSUFBQSxDQUFBLENBSmhCLENBQUE7QUFBQSxJQUtBLElBQUksQ0FBQyxNQUFMLEdBQWtCLElBQUEsTUFBQSxDQUFBLENBTGxCLENBQUE7QUFBQSxJQU1BLElBQUksQ0FBQyxPQUFMLEdBQW1CLElBQUEsT0FBQSxDQUFBLENBTm5CLENBRFc7RUFBQSxDQUFiOztBQUFBLDRCQVNBLE9BQUEsR0FBUyxJQVRULENBQUE7O0FBQUEsNEJBVUEsSUFBQSxHQUFNLElBVk4sQ0FBQTs7QUFBQSw0QkFXQSxNQUFBLEdBQVEsSUFYUixDQUFBOztBQUFBLDRCQVlBLE9BQUEsR0FBUyxJQVpULENBQUE7O0FBQUEsNEJBY0EsV0FBQSxHQUFhLFNBQUEsR0FBQTtBQUNYLFFBQUEsMERBQUE7QUFBQSxJQUFBLGNBQUEsR0FBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFiLElBQXdCLEVBQXpDLENBQUE7QUFBQSxJQUNBLFdBQUEsR0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQVYsSUFBcUIsRUFEbkMsQ0FBQTtBQUFBLElBRUEsYUFBQSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQVosSUFBdUIsRUFGdkMsQ0FBQTtBQUFBLElBR0EsY0FBQSxHQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQWIsSUFBd0IsRUFIekMsQ0FBQTtBQUlBLFdBQU8sY0FBYyxDQUFDLE1BQWYsQ0FDTCxXQURLLEVBRUwsYUFGSyxFQUdMLGNBSEssQ0FBUCxDQUxXO0VBQUEsQ0FkYixDQUFBOzt5QkFBQTs7SUFQRixDQUFBOztBQUFBLE1BZ0NNLENBQUMsT0FBUCxHQUFpQixlQWhDakIsQ0FBQSIsImZpbGUiOiJsaWJzL3VuaXQtZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlNlcnZpY2UgPSByZXF1aXJlKFwiLi9zZXJ2aWNlXCIpXG5Vbml0ICAgID0gcmVxdWlyZShcIi4vdW5pdFwiKVxuWEZsZWV0ICAgID0gcmVxdWlyZShcIi4veC1mbGVldFwiKVxuSW5zdGFsbCAgICA9IHJlcXVpcmUoXCIuL2luc3RhbGxcIilcblxuY2xhc3MgU3lzdGVtRFVuaXRGaWxlXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwib3B0aW9uc1wiLCB7XG4gICAgICBnZXQ6IHRoaXMuX2dldE9wdGlvbnNcbiAgICB9KVxuICAgIHRoaXMuc2VydmljZSA9IG5ldyBTZXJ2aWNlKClcbiAgICB0aGlzLnVuaXQgPSBuZXcgVW5pdCgpXG4gICAgdGhpcy54RmxlZXQgPSBuZXcgWEZsZWV0KClcbiAgICB0aGlzLmluc3RhbGwgPSBuZXcgSW5zdGFsbCgpXG5cbiAgc2VydmljZTogbnVsbFxuICB1bml0OiBudWxsXG4gIHhGbGVldDogbnVsbFxuICBpbnN0YWxsOiBudWxsXG5cbiAgX2dldE9wdGlvbnM6IC0+XG4gICAgc2VydmljZU9wdGlvbnMgPSB0aGlzLnNlcnZpY2Uub3B0aW9ucyBvciBbXVxuICAgIHVuaXRPcHRpb25zID0gdGhpcy51bml0Lm9wdGlvbnMgb3IgW11cbiAgICB4RmxlZXRPcHRpb25zID0gdGhpcy54RmxlZXQub3B0aW9ucyBvciBbXVxuICAgIGluc3RhbGxPcHRpb25zID0gdGhpcy5pbnN0YWxsLm9wdGlvbnMgb3IgW11cbiAgICByZXR1cm4gc2VydmljZU9wdGlvbnMuY29uY2F0KFxuICAgICAgdW5pdE9wdGlvbnMsXG4gICAgICB4RmxlZXRPcHRpb25zLFxuICAgICAgaW5zdGFsbE9wdGlvbnNcbiAgICApXG5cbm1vZHVsZS5leHBvcnRzID0gU3lzdGVtRFVuaXRGaWxlIl19