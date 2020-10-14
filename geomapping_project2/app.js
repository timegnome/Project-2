var myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 2
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
//to do define a function that parses date and returns a numeric value for the month
//getaddfunction - forEach

d3.csv("lockdowndates.csv").then(function(data) {
    console.log(data)
    // console.log(data.Date)
    var date = data.map(data=>data.Date)
    var lat = data.map(data=>data.Lat)
    var lng = data.map(data=>data.Lng)

    console.log(date)
    // console.log(lat)
    // console.log(lng)


    var markers = L.markerClusterGroup();

    for (var i=0; i < data.length; i++){
        markers.addLayer(L.marker([data[i].Lat, data[i].Lng])
        .bindPopup(data[i].Date))
    }
    myMap.addLayer(markers);



// parseddate=

//     getDataAddMarkers = function( {label, , map, } ) {
//         map.eachLayer(function (layer) {
//                 if (layer instanceof L.Marker) {
//                     map.removeLayer(layer);
//                 }
        
//         });
    
//         filteredData = data.filter(d=>d.Date){
//             return 
//         }
//     };



});







  
