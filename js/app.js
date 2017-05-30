$(document).ready(function (){
  var liftoffTime = new Date(1995, 6-1, 8);
  $("#age").countdown({until: liftoffTime});
});
