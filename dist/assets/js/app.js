
'use strict';

var map;
var coordinates = {};



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
    lat: +coordinates.latitude, lng: +coordinates.longitude
    //lat: 50.01491644, lng: 36.22078389
    },
    zoom: 16,
    zoomControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    },
    disableDefaultUI: true
    // scaleControl: true,
    // scrollwheel: true,
    // panControl: true,
    // streetViewControl: true,
    // draggable : true,
    // overviewMapControl: true
  });
var image = 'assets/images/icon-user.png';

  var beachMarker = new google.maps.Marker({
    position: {lat: +coordinates.latitude, lng: +coordinates.longitude},
    map: map,
    icon: image
  });
}

function success(pos) {
  coordinates.longitude = pos.coords.longitude;
  coordinates.latitude = pos.coords.latitude;  
  initMap();
};

var position = navigator.geolocation.getCurrentPosition(success);

