// Create superclass of Dancers
var Dancer = function() {
  var randomDancer = Math.floor(6 * Math.random()) + 1;
  this.$node = $('<img src="img/dancer' + randomDancer + '.gif"' + 'class="dancer"></img>');
  this.setPosition();

};

// Add position for the dancer
Dancer.prototype.setPosition = function() {
  // Add position properties on the Dancer superclass
  this.bottom = Math.round($('body').height() * Math.random() * 0.25);
  this.left = Math.round($('body').width() * Math.random());
  var position = {
    bottom: this.bottom,
    left: this.left
  };
  this.$node.css(position);
};

// Allow dancers to move
Dancer.prototype.move = function(x, y) {
  setTimeout(this.move.bind(this), 10);
  
  this.$node.toggle();
  this.left = this.left + x;
  this.bottom = this.bottom + y;
  var position = {
    bottom: this.bottom,
    left: this.left
  };
  this.$node.css(position);
};




// // Creates and returns a new dancer object that can step
// var Dancer = function(top, left, timeBetweenSteps) {
//   this.timeBetweenSteps = timeBetweenSteps;
//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');
//   this.step();
//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   this.setPosition(top, left);
// };

// Dancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   var styleSettings = {
//     top: top,
//     left: left,
//   };
//   this.$node.css(styleSettings);
// };

// Dancer.prototype.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };



