var CrazyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};
CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var size = Math.round(50 * Math.random());
  var red = Math.round(255 * Math.random());
  var green = Math.round(255 * Math.random());
  var blue = Math.round(255 * Math.random());
  var changeColor = {
    border: size + 'px' + ' solid ' + 'rgb' + '(' + red + ', ' + green + ', ' + blue + ')'
  };
  this.$node.addClass('crazyDancer');
  this.$node.css(changeColor);
};