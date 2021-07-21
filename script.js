mapboxgl.accessToken = 'pk.eyJ1Ijoic3RvbWFjaG9iamVjdGl2ZSIsImEiOiJja3JkdTdzeTM0dTNoMnZxdTUyMGl4eWllIn0.wbCWqVsqNZgsSTzOCewv6g';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})



function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude])
}

function errorLocation() {
    setupMap([42.5 -71.5])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
zoom: 14
    });

const nav = new mapboxgl.NavigationControl();
map.addControl(nav,);    

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    
  });
  

  map.addControl(directions, 'top-left');    
    
}
