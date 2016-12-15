/*

//map
function myMap() {
  var myCenter = new google.maps.LatLng(50.2919672,18.958149);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 13};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
    
    var infowindow = new google.maps.InfoWindow();
    
  marker.setMap(map);
}
*/
function myMap() {
    var myCenter = new google.maps.LatLng(52.1876326,20.9538632,17);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter, 
        zoom: 10,
        scrollwheel: false
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}
