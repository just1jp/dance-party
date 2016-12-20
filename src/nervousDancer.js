var NervousDancer = function() {
  Dancer.call(this);
  this.getAway();
};
NervousDancer.prototype = Object.create(Dancer.prototype);
NervousDancer.prototype.constructor = NervousDancer;

NervousDancer.prototype.getAway = function() {
  var dancers = window.dancers;
  var x1 = this.left;
  var y1 = this.bottom;
  for (var i = 0; i < dancers.length; i++) {
    var x2 = dancers[i].left;
    var y2 = dancers[i].bottom;
    var distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if (this.left > 10 && ($('body').width() - this.left) > 100 ) {
      Dancer.prototype.move.call(this, 1, 0);
      this.getAway();
    }
  }
};