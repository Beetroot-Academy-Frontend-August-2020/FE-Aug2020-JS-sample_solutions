const restaurants = [{
        name: 'La Neta',
        position: {
            lat: 59.3366999,
            lng: 18.0559085
        },
        img: '',
        content: 'Great Mexican street food!'
    },
    {
        name: 'Indian Street Food & Co',
        position: {
            lat: 59.3423423,
            lng: 18.0351534
        },
        content: 'High-end Indian street food. Delicious!'
    },
    {
        name: 'Eatnam',
        position: {
            lat: 59.3417846,
            lng: 18.045234
        },
        content: 'Hearty and delicious Vietnamese food!'
    },
    {
        name: 'Prime Burger',
        position: {
            lat: 59.3359588,
            lng: 18.0615264
        },
        content: 'Best burgers in town.'
    },
    {
        name: 'M5',
        position: {
            lat: 59.3359701,
            lng: 18.053333
        },
        content: 'Best raggmunk in Stockholm on a Tuesday.'
    },
    {
        name: 'Penny and Bill',
        position: {
            lat: 59.3371288,
            lng: 18.0749771
        },
        content: 'Classy, elevated, and delicious vegan food.'
    },
    {
        name: 'Phil\'s Burger',
        position: {
            lat: 59.3323595,
            lng: 18.0357575
        },
        content: 'Second-best burgers in town.'
    },
    {
        name: 'Crêperie Frya Knop',
        position: {
            lat: 59.3172265,
            lng: 18.0701617
        },
        content: 'Phenomenal savoury and dessert crêpes.'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const from = document.querySelector('#from');
    const to = document.querySelector('#to');

    restaurants.forEach(place => {
        const opt = document.createElement('option');
        opt.value = [place.position.lat,place.position.lng].join(',');
        opt.text = place.name;
        to.appendChild(opt);
    });

    restaurants.forEach(place => {
        const opt = document.createElement('option');
        opt.value = [place.position.lat,place.position.lng].join(',');
        opt.text = place.name;
        from.appendChild(opt);
    });
});

function initMap() {
    const bounds = new google.maps.LatLngBounds();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();

    const center = {
        lat: 59.3252263,
        lng: 18.064313
    };
    const zoom = 13;
    const basicOptions = {
        center,
        zoom
    };
    const UIControls = {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: false
    };

    const options = Object.assign(basicOptions, UIControls);

    let mapRef = document.querySelector('#map');
    const map = new google.maps.Map(mapRef, options);

    let maxHeight = Math.ceil(document.querySelector('body').clientHeight * 0.8);
    mapRef.style.height = maxHeight + 'px';

    bounds.extend(center);

    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.querySelector('#directions-panel'));

    document.querySelector('button').addEventListener('click', (e) => {
        const origin = e.target.form[0].value;
        const dest = e.target.form[1].value;
        calcRoute({origin, dest}, directionsRenderer, directionsService);
    })

    loadMarkers(restaurants, map, bounds);
}

function loadMarkers(markers, map, bounds) {
    markers.forEach((marker) => {
        const m = new google.maps.Marker({
            position: {
                lat: marker.position.lat,
                lng: marker.position.lng
            },
            map: map,
        });
        m.addListener("click", () => {
            infowindow.open(map, m);
        });
        const infowindow = new google.maps.InfoWindow({
            content: `<h2>${marker.name}</h2>
            <p>${marker.content}</p>
            `,
        });
        bounds.extend(marker.position);
    });
}

function calcRoute(obj, renderer, service) {
    let request = {
        origin: obj.origin,
        destination: obj.dest,
        travelMode: 'TRANSIT'
    };
    service.route(request, (result, status) => {
        let panel = document.querySelector('#directions-panel');

        panel.style.display = 'block';

        if (status == 'OK') {
            renderer.setDirections(result);
        }

        panel.scrollIntoView();
    });

}