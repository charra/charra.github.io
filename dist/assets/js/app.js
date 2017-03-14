'use strict';

var map;
var coordinates = {};

// function anAsyncCall() {  

function success(pos) {
  coordinates.longitude = pos.coords.longitude;
  coordinates.latitude = pos.coords.latitude;
  
  console.log('Your current position is:');
  console.log('Latitude : ' + coordinates.latitude);
  console.log('Longitude: ' + coordinates.longitude);
   //initMap();
};

var position = navigator.geolocation.getCurrentPosition(success);

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
    lat: +coordinates.latitude, lng: +coordinates.longitude
    //lat: 50.01491644, lng: 36.22078389
    },
    zoom: 14,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    },
    scaleControl: true,
    scrollwheel: true,
    panControl: true,
    streetViewControl: true,
    draggable : true,
    overviewMapControl: true
  });
}	







