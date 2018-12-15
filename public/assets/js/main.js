function main(){
  initMasonry();
  setWaypoints();
  initSmoothScrolling();
  rgbMain();
  twitchMain();
}

//inits the masonry grid
function initMasonry(){
  $('.grid').masonry({
    itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  $('.grid').imagesLoaded().progress( function() {
    $('.grid').masonry('layout');
  });
}

//provides cross-browser smooth scrolling
function initSmoothScrolling(){
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
}

//function that will trigger a fadeIn effect on each section
function setWaypoints(){
  let sections = $(".section");
  var skillsWaypoints = $('#skills').waypoint({
    handler: function(direction) {
      if(direction === "down"){
        $("#skills").removeClass("fadeOut");
        $("#skills").addClass("fadeInUp");
      }
    },
    offset: "80%"
  });

  var experienceWaypoints = $('#experience').waypoint({
    handler: function(direction) {
      if(direction === "down"){
        $("#experience").removeClass("fadeOut");
        $("#experience").addClass("fadeInUp");
      }
    },
    offset: "80%"
  });

  var projectsWaypoints = $('#projects').waypoint({
    handler: function(direction) {
      if(direction === "down"){
        $("#projects").removeClass("fadeOut");
        $("#projects").addClass("fadeInUp");
      }
    },
    offset: "80%"
  });
}