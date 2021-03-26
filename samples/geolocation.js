console.log(navigator.geolocation.getCurrentPosition());

console.log(navigator.geolocation.getCurrentPosition(showPosition));

    function showPosition(position) {
      console.log("Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);
    };
    
    console.log(true);