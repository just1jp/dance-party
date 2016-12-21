$(document).ready(function() {

  window.dancers = [];

  $('.btn-create').on('click', function() {
    var dancerTypeString = $(this).data('dancer-type');
    var dancerType = window[dancerTypeString];
    // Create new dancer instance
    var dancer = new dancerType();
    // Push new dancer to global dancers array
    dancers.push(dancer);
    // Add new dancer to DOM
    $('body').append(dancer.$node);
  });

  $('body').on('click', '.dancer', function() {
    console.log('clicked');
    // Retrieve object for the dancer that is clicked
    var dancerNumb = $(this).data('dancer-num');
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i]['number'] === dancerNumb) {
        var clickedObj = window.dancers[i];
      }
    }
    console.log(clickedObj);
    // Set start coordinate to create lines from
    var centerX = ($('body').width() / 2) * 0.9;
    var centerY = ($('body').height() / 2) * 0.6;

    // Move dancer to middle of dance floor
    centerY -= 100;
    clickedObj.updatePosition(centerX, centerY);
    clickedObj.$node.addClass('centered');
  });

  $('body').on('click', '.centered', function() {
    console.log('center dancer clicked');
    // Retrieve object for the dancer that is clicked
    var dancerNumb = $(this).data('dancer-num');
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i]['number'] === dancerNumb) {
        var clickedObj = window.dancers[i];
      }
    }
    console.log(clickedObj);    
    clickedObj.updatePosition(clickedObj.left, clickedObj.bottom);
    clickedObj.$node.removeClass('centered');
  });

  $('.btn[data-action="lineUp"]').on('click', function() {
    // Get an array of dancers
    var dancers = window.dancers;
    // Set start coordinate to create lines from
    var centerX = ($('body').width() / 2) * 0.9;
    var centerY = ($('body').height() / 2) * 0.6;

    // Iterate over each dancer in the array
    for (var i = 0; i < dancers.length; i++) {
      console.log(dancers.indexOf(dancers[i]));
      // If have gone through half of dancers, send next dancer to other side by resetting centerpoint
      if (dancers.indexOf(dancers[i]) === Math.floor(dancers.length / 2)) {
        centerX = ($('body').width() / 2) * 1.1;
        centerY = ($('body').height() / 2) * 0.6;
        console.log('resetting');
      }
      if (dancers.indexOf(dancers[i]) < Math.floor(dancers.length / 2)) {
        // Create step in the line for first half of dancers
        centerX -= 30;
        centerY -= 30;
        console.log('line1');
      } else {
        // Create step in the line for second half of dancers
        centerX += 30;
        centerY -= 30;
        console.log('line2');
      }
      // Iteratively add new coordinate properties to each element
      dancers[i].left = centerX;
      dancers[i].bottom = centerY;
      // Call update position method on the dancer
      dancers[i].updatePosition(dancers[i].left, dancers[i].bottom);
    }
  });

  $('.btn[data-action="partnerUp"]').on('click', function() {
    // Get array of dancers
    var dancers = window.dancers;
    // Iterate over each dancer
    for (var i = 0; i < dancers.length - 1; i += 2) { 
      // Match coordinates with next dancer
      dancers[i].left = dancers[i + 1].left + 30;
      dancers[i].bottom = dancers[i + 1].bottom;
      // Update coordinate of pair
      dancers[i].updatePosition(dancers[i].left, dancers[i].bottom); 
    }
  });













});

