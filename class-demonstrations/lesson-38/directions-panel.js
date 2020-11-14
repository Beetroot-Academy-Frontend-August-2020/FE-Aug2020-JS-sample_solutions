function initMap() {
    const bounds = new google.maps.LatLngBounds();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();

    const center = {
        lat: 59.3307777,
        lng: 18.0569172,
    };
    const zoom = 15;
    const map = new google.maps.Map(document.querySelector('#map'), {
        center,
        zoom
    });
    const centerMarker = new google.maps.Marker({
        position: center,
        map: map,
    });
    bounds.extend(center);
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.querySelector('#directions-panel'));

    document.querySelector('button').addEventListener('click', () => {
        calcRoute(directionsRenderer, directionsService);
    })
}

function calcRoute(renderer, service) {
    let start = 'KTH Royal Institute of Technology, Brinellvägen 8, 114 28 Stockholm';
    let end = 'Espresso House, Sveavägen 82, 113 59 Stockholm';

    let request = {
        origin: start,
        destination: end,
        travelMode: 'TRANSIT'
    };
    service.route(request, (result, status) => {
        document.querySelector('#directions-panel').style.display = 'block';

        if (status == 'OK') {
            renderer.setDirections(result);
        }
    });
}