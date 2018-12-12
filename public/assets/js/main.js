function main(){
    var waypoints = $('#skill').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      }) 
}