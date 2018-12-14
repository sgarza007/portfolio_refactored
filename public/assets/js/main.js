function main(){
  initMasonry();
  setWaypoints();
  rgbMain();
  twitchMain();
}

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

//function that will trigger a fadeIn effect on each section
function setWaypoints(){
  let sections = $(".section");
  //initially have all the sections faded out
  sections.each(function(){
    $(this).fadeOut();
  });
  
  var skillsWaypoints = $('#skills').waypoint({
    handler: function(direction) {
      if(direction === "down"){
        $("#skills").fadeIn(750);
      }
    },
    offset: "75%"
  });

  var projectsWaypoints = $('#projects').waypoint({
    handler: function(direction) {
      if(direction === "down"){
        $("#projects").fadeIn(750);
      }
    },
    offset: "75%"
  });

  var experienceWaypoints = $('#experience').waypoint({
    handler: function(direction) {
      if(direction === "down"){
        $("#experience").fadeIn(750);
      }
    },
    offset: "75%"
  });
}