
btnShareLocation = document.querySelector('#share-location');

btnShareLocation.addEventListener('click', () => {
    if(!navigator.geolocation) {
        return alert("Your browser not support!");
    }
    navigator.geolocation.getCurrentPosition( (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let map = `https://www.google.com/maps?q=${lat},${long}`;
        window.open(map, "_blank");
    })
});
