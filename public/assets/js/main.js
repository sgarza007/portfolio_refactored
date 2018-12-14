function main(){
  $("#skills").fadeOut();
  
  var waypoint = new Waypoint({
    element: document.getElementById('skills'),
    handler: function(direction) {
      if(direction === "down"){
        //fadeIn skills
        $("#skills").fadeIn(700);
      } else{
      }
    },
    offset: 100
  });
      initMasonry();
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