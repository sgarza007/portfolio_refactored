function main(){
    // var waypoints = $('#skill').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   });

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