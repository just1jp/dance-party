var DrunkDancer = function() {
  Dancer.call(this);
  this.teeter();
};
DrunkDancer.prototype = Object.create(Dancer.prototype);
DrunkDancer.prototype.constructor = DrunkDancer;

DrunkDancer.prototype.teeter = function() {
  this.$node.addClass('drunk');
};