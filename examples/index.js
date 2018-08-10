mapboxgl.accessToken = 'pk.eyJ1IjoiZG90bmV0bWVudG9yIiwiYSI6IjliNzRjYWMwOWViNDJiNDEwY2MwZTJmZTE0ODgzODI1In0.JO_37JY6Q41dDEgViV4cNQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [11.94, 57.7],
    zoom: 12
});

var waypoints = [
  [11.94, 57.74],
  [11.949, 57.6792]
]
var control = new mbglrm.Control({
  map,
  waypoints
});
