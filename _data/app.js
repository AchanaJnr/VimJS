// import MovieData from './MovieData';

let data = {
            PkID: "0c148640-f900-44d3-a4b8-3beec3672f03",
            FName: "Emmanuel",
            LName: "Achana",
            Email: "emmanuel.achana@persol.net",
            token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNlOWQ0MjA0NmE2MzYwYmEwYzZiNmM5ZTIxOTI1OGJlIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NzkwMDEzNzEsImV4cCI6MTU3OTAwNDk3MSwiaXNzIjoiaHR0cDovL3BzbC1hcHAtdm0zL3BhYmlkcCIsImF1ZCI6WyJodHRwOi8vcHNsLWFwcC12bTMvcGFiaWRwL3Jlc291cmNlcyIsInBheXJvbGxhcGkiXSwiY2xpZW50X2lkIjoicGF5aW1wbGljaXQiLCJzdWIiOiIwYzE0ODY0MC1mOTAwLTQ0ZDMtYTRiOC0zYmVlYzM2NzJmMDMiLCJhdXRoX3RpbWUiOjE1NzkwMDEzNzAsImlkcCI6ImxvY2FsIiwiY291bnRyeSI6IlVTIiwiZ2l2ZW5fbmFtZSI6IkVtbWFudWVsIiwiZW1haWwiOiJlbW1hbnVlbC5hY2hhbmFAcGVyc29sLm5ldCIsImZhbWlseV9uYW1lIjoiQWNoYW5hIiwic3Vic2NyaXB0aW9ubGV2ZWwiOiJGcmVlVXNlciIsImFkZHJlc3MiOiJBY2NyYSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInBheXJvbGxhcGkiXSwiYW1yIjpbInB3ZCJdfQ.yC1OXruWAXYoqANx1z3hsVZ-S4Uvh_vUO5Wx80xNNschCceV_31gjbMBr0VpZh2-QZKgTcaOYjsRLKUF1puaRUsjlYeCWC67zIv_Xx9GVpHG1aoTW9CnAhP_rhar-i7_zsOdhLzEPb_Av_TFzHT4T-By3UGAraBK9TRoteyzmpgdVkeitA853xIZo91UTlx4xSYGFS_ycfeLr0fA1BQaUlZKKuOtfQLhrmnhEQZGkkVl2Q168qBGO69k8WlwSRWWNa779vCs7p2q-OYDB4kS6QeDNMVMH8JGepiLbzFSUYMB2Kt1AVKT_yeHRCDF3WbtbXX9ORiVjlMxkMC6ZLe8Pg'
          }


function encodeBuffer64(data){
  buff = new Buffer(data);
  return buff.toString('base64');
}

function decodeBuffer64(data){
  let buff = new Buffer(data, 'base64');
  if(buff.toString('ascii').includes("{" && ":"))
      return JSON.parse(buff.toString('ascii'));
  return buff.toString('ascii')
}

//console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------');
//console.log(encodeBuffer64(JSON.stringify(data)))

//console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------');
//let r_data = decodeBuffer64(encodeBuffer64(JSON.stringify(data)))
//console.log(r_data)
//console.log('"' + data + '" converted to Base64 is "' + encodeBuffer64(data) + '"');
//console.log('"' + encodeBuffer64(data) + '" converted from Base64 to ASCII is "' + decodeBuffer64(encodeBuffer64(data)) + '"');

function edit(el) {
  el.childNodes[0].removeAttribute("disabled");
  el.childNodes[0].focus();
  window.getSelection().removeAllRanges();
}
function disable(el) {
  el.setAttribute("disabled", "");
}

getLocation()
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude);
}
