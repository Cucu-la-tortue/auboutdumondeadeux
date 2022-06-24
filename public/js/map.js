// Colors
const countryColor = "#ff6347";
const routeColor = "#00008b";

// Get the name of the country
let path = window.location.pathname;  // get the path of the html page
let page = path.split("/").pop();     // get the name of the hmtl page
let country_name = page.split(".")[0];     // get the name of the country

const COUNTRY = COUNTRIES[country_name];


function initMap() {
    // Create directionsObjects to handle routes
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    
    // Create map
    let map = new google.maps.Map(document.getElementById("map"), {
        center: COUNTRY["capital"],
        //restriction: {
        //latLngBounds: COUNTRY["bounds"],
        //strictBounds: false,
        //},
        zoom: COUNTRY["zoom"],
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
        {
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "landscape.natural",
            "stylers": [
            {
                "visibility": "on"
            }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
            {
                "visibility": "simplified"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        ]
    })

    // Map style
    let geojson_path = "./../../GeoJson/" + COUNTRY["countryName"] + ".json";
    map.data.loadGeoJson(geojson_path);
    map.data.setStyle({
        fillColor: countryColor,
        fillOpacity: 0.1,
        strokeWeight: 1,
        strokeColor: countryColor,
    });

    // Routes style
    // directionsRenderer.setMap(map);
    // directionsRenderer.setOptions({
    //     polylineOptions: {
    //     strokeColor: routeColor
    //     },
    //     preserveViewport: true,  // avoid auto zoom at first load
    //     suppressMarkers: true    // suppress markers of the route
    // });

    // addRoute(directionsRenderer, directionsService);
    addMarkers(map);
}





function addMarkers(map, timeout) {
    // Select every markers on the map
    const markers = COUNTRY["markers"];

    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow({
        maxWidth: 200
    });

    // Create each marker with a timeout and an infoWindow
    for (let i = 0; i < markers.length; i++) {
        window.setTimeout(() => {

            // Create Marker image
            const image = {
                url: "./../../assets/pin.png",
                anchor: new google.maps.Point(16, 32),  // create a google maps Point from the anchor coordinates
            }

            // Create marker
            const marker = new google.maps.Marker({
                position: markers[i]["position"],
                map: map,
                icon: image,
                animation: google.maps.Animation.DROP,
                optimized: false,
            });

            // Add infoWindow
            marker.addListener("mouseover", () => {
                infoWindow.close();                         // close the previous infoWindow
                infoWindow.setContent(markers[i]["content"]);
                infoWindow.open({
                    map: marker.getMap(), 
                    anchor: marker
                    });
            });

            // Redirect to specif webpage if clicked
            marker.addListener("click", () => {
                document.getElementById(markers[i]["id"]).scrollIntoView()
            });
        }, i*200 + 1500);
    };
}





// function addRoute(directionsRenderer, directionsService) {
//     // Select the waypoints, origin and destination
//     const waypts = COUNTRY["markers"].slice(1, -1);
//     const start = COUNTRY["markers"][0];
//     const end = COUNTRY["markers"][COUNTRY["markers"].length -1];  // last element

//     // Format the waypoints to fit the correct shape
//     const requestWaypts = [];
//     for (let i = 0; i < waypts.length; i++) {
//         requestWaypts.push({
//             location: waypts[i]["position"]  // select position of the waypoint
//         })
//     }

//     // Create request
//     let request = {
//         origin: start["position"],
//         destination: end["position"],
//         waypoints: requestWaypts,
//         travelMode: "WALKING",
//     };

//     // Send request and display the route
//     directionsService.route(request, function(response, status) {
//         if (status == 'OK') {
//             directionsRenderer.setDirections(response);
//         }
//     });
// }





window.initMap = initMap;