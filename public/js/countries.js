// ARGENTINA
const ARGENTINA = {
    countryName: "Argentina",
    capital: { lat: -34.6, lng: -58.38 },
    zoom: 4,
    // bounds: {
    //     north: -20,
    //     south: -56,
    //     west: -74,
    //     east: -53,
    // },
    markers: [
        {
            position: { lat: -34.603722, lng: -58.381592 },
            content: 
                "<div class='infoWindow' onclick=\"window.location='#day-report__1'\">" +
                "<h5 class='infoWindow__heading'>Buenos Aires</h5>" +
                "<h6 class='infoWindow__days'>Jour 1 — Jour 4</h6>" +
                "</div>",
            id: "day-report__1"
        },
        {
            position: { lat: -50.333332, lng: -72.249999 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>El Calafate</h5>" +
                "<h6 class='infoWindow__days'>Jour 5 — Jour 7</h6>" +
                "</div>",
            id: "day-report__5"
        },
        {
            position: { lat: -49.323998704, lng: -72.924662968 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>El Chaltén</h5>" +
                "<h6 class='infoWindow__days'>Jour 8 — Jour 11</h6>" +
                "</div>",
            id: "day-report__8"
            },
        {
            position: { lat: -25.59912, lng: -54.57355 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>Iguazu</h5>" +
                "<h6 class='infoWindow__days'>Jour 12 — Jour 15</h6>" +
                "</div>",
            id: "day-report__12"
            },
        {
            position: { lat: -41.1499994, lng: -71.2999988 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>San Carlos de Bariloche</h5>" +
                "<h6 class='infoWindow__days'>Jour 16 — Jour 19</h6>" +
                "</div>",
            id: "day-report__16"
            },
        {
            position: { lat: -32.89084, lng: -68.82717 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>Mendoza</h5>" +
                "<h6 class='infoWindow__days'>Jour 20 — Jour 23</h6>" +
                "</div>",
            id: "day-report__20"
            },
        {
            position: { lat: -23.57757, lng: -65.3509 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>Tilcara</h5>" +
                "<h6 class='infoWindow__days'>Jour 26 — Jour 29</h6>" +
                "</div>",
            id: "day-report__26"
            },
        {
            position: { lat: -24.7859, lng: -65.41166 },
            content: 
            "<div class='infoWindow'>" +
            "<h5 class='infoWindow__heading'>Salta</h5>" +
            "<h6 class='infoWindow__days'>Jour 24, 25 & 30</h6>" +
            "</div>",
            id: "day-report__24"
        },
    ]
};





// BOLIVIA
const BOLIVIA = {
    countryName : "Bolivia",
    capital: { lat: -16.5, lng: -68.15 },
    zoom: 6,
    // bounds: {
    //     north: -8.924071969463062,
    //     south: -23.124777406712447,
    //     west: -69.85989935236152,
    //     east: -57.275963316175535,
    // },
    markers: [
        {
            type: "start",
            position: { lat: -16.480486925798346, lng: -68.12173706659871 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>Start</h5>" +
                "<p class='infoWindow__content'>La Paz est la capitale de la Bolivie et la troisième ville la plus peuplée du pays</p>" +
                "</div>",
            link: "https://www.google.fr/",
        },
        {
            type: "waypoint",
            position: { lat: -14.835451885316997, lng: -64.89681157358518 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>1</h5>" +
                "<p class='infoWindow__content'>La Paz est la capitale de la Bolivie et la troisième ville la plus peuplée du pays</p>" +
                "</div>",
            link: "https://www.google.fr/",
        },
        {
            type: "waypoint",
            position: { lat: -15.8979735752016, lng: -63.16808975758107 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>2</h5>" +
                "<p class='infoWindow__content'>La Paz est la capitale de la Bolivie et la troisième ville la plus peuplée du pays</p>" +
                "</div>",
            link: "https://www.google.fr/",
        },
        {
            type: "waypoint",
            position: { lat: -17.83279800888711, lng: -63.137761304668715 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>3</h5>" +
                "<p class='infoWindow__content'>La Paz est la capitale de la Bolivie et la troisième ville la plus peuplée du pays</p>" +
                "</div>",
            link: "https://www.google.fr/",
        },
        {
            type: "end",
            position: { lat: -17.428144146714356, lng: -66.1604971115999 },
            content: 
                "<div class='infoWindow'>" +
                "<h5 class='infoWindow__heading'>End</h5>" +
                "<p class='infoWindow__content'>La Paz est la capitale de la Bolivie et la troisième ville la plus peuplée du pays</p>" +
                "</div>",
            link: "https://www.google.fr/",
        }
    ]
};



// List of all countries
const COUNTRIES = {
    argentina: ARGENTINA,
    bolivia: BOLIVIA,
}