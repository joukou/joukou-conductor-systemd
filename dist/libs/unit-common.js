var Section, SystemDUnitCommon,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Section = require("./section");

SystemDUnitCommon = (function(_super) {
  __extends(SystemDUnitCommon, _super);

  function SystemDUnitCommon(section) {
    SystemDUnitCommon.__super__.constructor.call(this, section);
  }

  SystemDUnitCommon.prototype.addDescription = function(value) {
    return this.addPair("Description", value);
  };

  SystemDUnitCommon.prototype.addDocumentation = function(value) {
    return this.addPair("Documentation", value);
  };

  SystemDUnitCommon.prototype.addRequires = function(value) {
    return this.addPair("Requires", value);
  };

  SystemDUnitCommon.prototype.addWants = function(value) {
    return this.addPair("Wants", value);
  };

  SystemDUnitCommon.prototype.addBindsTo = function(value) {
    return this.addPair("BindsTo", value);
  };

  SystemDUnitCommon.prototype.addPartOf = function(value) {
    return this.addPair("PartOf", value);
  };

  SystemDUnitCommon.prototype.addBefore = function(value) {
    return this.addPair("Before", value);
  };

  SystemDUnitCommon.prototype.addAfter = function(value) {
    return this.addPair("After", value);
  };

  return SystemDUnitCommon;

})(Section);

module.exports = SystemDUnitCommon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdW5pdC1jb21tb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsMEJBQUE7RUFBQTtpU0FBQTs7QUFBQSxPQUFBLEdBQVUsT0FBQSxDQUFRLFdBQVIsQ0FBVixDQUFBOztBQUFBO0FBS0Usc0NBQUEsQ0FBQTs7QUFBYSxFQUFBLDJCQUFDLE9BQUQsR0FBQTtBQUNYLElBQUEsbURBQU0sT0FBTixDQUFBLENBRFc7RUFBQSxDQUFiOztBQUFBLDhCQUlBLGNBQUEsR0FBZ0IsU0FBQyxLQUFELEdBQUE7V0FDZCxJQUFDLENBQUEsT0FBRCxDQUFTLGFBQVQsRUFBd0IsS0FBeEIsRUFEYztFQUFBLENBSmhCLENBQUE7O0FBQUEsOEJBUUEsZ0JBQUEsR0FBa0IsU0FBQyxLQUFELEdBQUE7V0FDaEIsSUFBQyxDQUFBLE9BQUQsQ0FBUyxlQUFULEVBQTBCLEtBQTFCLEVBRGdCO0VBQUEsQ0FSbEIsQ0FBQTs7QUFBQSw4QkFZQSxXQUFBLEdBQWEsU0FBQyxLQUFELEdBQUE7V0FDWCxJQUFDLENBQUEsT0FBRCxDQUFTLFVBQVQsRUFBcUIsS0FBckIsRUFEVztFQUFBLENBWmIsQ0FBQTs7QUFBQSw4QkFnQkEsUUFBQSxHQUFVLFNBQUMsS0FBRCxHQUFBO1dBQ1IsSUFBQyxDQUFBLE9BQUQsQ0FBUyxPQUFULEVBQWtCLEtBQWxCLEVBRFE7RUFBQSxDQWhCVixDQUFBOztBQUFBLDhCQW9CQSxVQUFBLEdBQVksU0FBQyxLQUFELEdBQUE7V0FDVixJQUFDLENBQUEsT0FBRCxDQUFTLFNBQVQsRUFBb0IsS0FBcEIsRUFEVTtFQUFBLENBcEJaLENBQUE7O0FBQUEsOEJBd0JBLFNBQUEsR0FBVyxTQUFDLEtBQUQsR0FBQTtXQUNULElBQUMsQ0FBQSxPQUFELENBQVMsUUFBVCxFQUFtQixLQUFuQixFQURTO0VBQUEsQ0F4QlgsQ0FBQTs7QUFBQSw4QkE0QkEsU0FBQSxHQUFXLFNBQUMsS0FBRCxHQUFBO1dBQ1QsSUFBQyxDQUFBLE9BQUQsQ0FBUyxRQUFULEVBQW1CLEtBQW5CLEVBRFM7RUFBQSxDQTVCWCxDQUFBOztBQUFBLDhCQWdDQSxRQUFBLEdBQVUsU0FBQyxLQUFELEdBQUE7V0FDUixJQUFDLENBQUEsT0FBRCxDQUFTLE9BQVQsRUFBa0IsS0FBbEIsRUFEUTtFQUFBLENBaENWLENBQUE7OzJCQUFBOztHQUQ4QixRQUpoQyxDQUFBOztBQUFBLE1Bd0NNLENBQUMsT0FBUCxHQUFpQixpQkF4Q2pCLENBQUEiLCJmaWxlIjoibGlicy91bml0LWNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlNlY3Rpb24gPSByZXF1aXJlKFwiLi9zZWN0aW9uXCIpXG5cbiMgRm9yIGFsbCBvdGhlciBvcHRpb25zIHNlZVxuIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sXG5jbGFzcyBTeXN0ZW1EVW5pdENvbW1vbiBleHRlbmRzIFNlY3Rpb25cbiAgY29uc3RydWN0b3I6IChzZWN0aW9uKSAtPlxuICAgIHN1cGVyKHNlY3Rpb24pXG5cbiAgIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sI0Rlc2NyaXB0aW9uPVxuICBhZGREZXNjcmlwdGlvbjogKHZhbHVlKSAtPlxuICAgIEBhZGRQYWlyKFwiRGVzY3JpcHRpb25cIiwgdmFsdWUpXG5cbiAgIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sI0RvY3VtZW50YXRpb249XG4gIGFkZERvY3VtZW50YXRpb246ICh2YWx1ZSkgLT5cbiAgICBAYWRkUGFpcihcIkRvY3VtZW50YXRpb25cIiwgdmFsdWUpXG5cbiAgIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sI1JlcXVpcmVzPVxuICBhZGRSZXF1aXJlczogKHZhbHVlKSAtPlxuICAgIEBhZGRQYWlyKFwiUmVxdWlyZXNcIiwgdmFsdWUpXG5cbiAgIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sI1dhbnRzPVxuICBhZGRXYW50czogKHZhbHVlKSAtPlxuICAgIEBhZGRQYWlyKFwiV2FudHNcIiwgdmFsdWUpXG5cbiAgIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sI0JpbmRzVG89XG4gIGFkZEJpbmRzVG86ICh2YWx1ZSkgLT5cbiAgICBAYWRkUGFpcihcIkJpbmRzVG9cIiwgdmFsdWUpXG5cbiAgIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sI1BhcnRPZj1cbiAgYWRkUGFydE9mOiAodmFsdWUpIC0+XG4gICAgQGFkZFBhaXIoXCJQYXJ0T2ZcIiwgdmFsdWUpXG5cbiAgIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sI0JlZm9yZT1cbiAgYWRkQmVmb3JlOiAodmFsdWUpIC0+XG4gICAgQGFkZFBhaXIoXCJCZWZvcmVcIiwgdmFsdWUpXG5cbiAgIyBodHRwOi8vMHBvaW50ZXIuZGUvcHVibGljL3N5c3RlbWQtbWFuL3N5c3RlbWQudW5pdC5odG1sI0FmdGVyPVxuICBhZGRBZnRlcjogKHZhbHVlKSAtPlxuICAgIEBhZGRQYWlyKFwiQWZ0ZXJcIiwgdmFsdWUpXG5cbm1vZHVsZS5leHBvcnRzID0gU3lzdGVtRFVuaXRDb21tb24iXX0=