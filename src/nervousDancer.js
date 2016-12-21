var NervousDancer = function() {
  Dancer.call(this);
  setTimeout(this.getAway.bind(this), 0);
};
NervousDancer.prototype = Object.create(Dancer.prototype);
NervousDancer.prototype.constructor = NervousDancer;

NervousDancer.prototype.getAway = function() {
  // Create array of all dancers
  var dancers = window.dancers;
  
  // Create quartile count variables
  var topRight = 0;
  var bottomRight = 0;
  var topLeft = 0;
  var bottomLeft = 0;

  // Update quartile counts based on other dancers
  for (var i = 0; i < dancers.length; i++) {
    if (dancers[i].left <= this.left && dancers[i].bottom >= this.bottom) {
      topLeft++;
    }
    if (dancers[i].left <= this.left && dancers[i].bottom <= this.bottom) {
      bottomLeft++;
    }
    if (dancers[i].left >= this.left && dancers[i].bottom >= this.bottom) {
      topRight++;
    }
    if (dancers[i].left >= this.left && dancers[i].bottom <= this.bottom) {
      bottomRight++;
    }
  }
  // Make sure the dancer stays in bounds
  if (this.left > 10 && (this.left + 200) < $('body').width() && this.bottom < 200 && this.bottom > 10) {
      // Calculate movement
    var movementLeft = (topLeft + bottomLeft) - (topRight + bottomRight);
    var movementBottom = (bottomLeft + bottomRight) - (topLeft + topRight);
    // Multiply by number of pixels to move
    movementLeft *= 10;
    movementBottom *= 10;
    // Update where to move dancer to
    this.left = this.left + movementLeft;
    this.bottom = this.bottom + movementBottom;
    // Update position
    Dancer.prototype.updatePosition.call(this, this.left, this.bottom);
    this.getAway();
  }
};














