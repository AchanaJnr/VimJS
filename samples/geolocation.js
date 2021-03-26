navigator.geolocation.getCurrentPosition(getCoor, errorCoor, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});

function getCoor(data){
  console.log(data);
};
function errorCoor(err){
  console.log(err);
};

//Dummy one, which will result in a working next statement.
navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
//The working next statement.
navigator.geolocation.getCurrentPosition(function (position) {
    //Your code here
    console.log(position);
}, function (e) {
    //Your error handling here
    console.log(e);
}, {
    enableHighAccuracy: true
});

console.log (true)