 // ******************************************** // 
 // image slider control
 // ~ using jQuery lib.
 // https://github.com/Gitami/SuperSimpleJQuerySlider
 // ******************************************** //

var nextInterval = 1500; // time between images
var fadespeedIn  = 1000; // the speed at which a new image fades in
var fadespeedOut = 500;  // the speed at which the old fades out 

$(document).ready(function(){  
  $('#imgslideshow img').css({opacity: 0.0}); // All opacity to zero 
  $('#imgslideshow img:first').css({opacity: 1.0}); // opacity to full for first image
  setInterval('imgslideshow()',nextInterval); // Internal of rotation
});

  function imgslideshow() {
    
    // if class=show on img, the use it, otherwise use the first one
    if($('#imgslideshow img.show')){ 
      var current = $('#imgslideshow img.show');
    }
    else{
      var current = $('#imgslideshow img:first');
    }
    
    // if there is another image, use it. Otherwise start from the beginning of the loop
    if(current.next().length){
      var next = current.next();
    }
    else{
      var next = $('#imgslideshow img:first');
    }

    // 
    next.css({opacity: 0.0}) // Find det næste element som har opacity sat til 0
      .addClass('show') // vis elementet
      .animate({opacity: 1.0}, // sæt opacity til 1 
      fadespeedIn // over x milisekunder
    );

    current.animate({opacity: 0.0}, fadespeedOut).removeClass('show'); // skjul nuværende aktive element
  }