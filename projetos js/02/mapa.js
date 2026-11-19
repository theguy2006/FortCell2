let h2 = document.querySelector('h2')

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.latitude}`
}
function error(error){
    console.log(error);
}

navigator.geolocation.getCurrentPosition(success, error);