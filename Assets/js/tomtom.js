// MAP DISPLAY
//
//Variables
var API_KEY = "p83hoeez5IbC5O5kpydSeHBsRQ2mQwo9";
var APPLICATION_NAME = "Ale Trail Guide";
var APPLICATION_VERSION = "1.0";
tt.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION);
var denver = { lng: -104.984898, lat: 39.739094 };
var brewery = { lat: 0, lng: 0 };
//determines where the map will be centered and zoomed on:
var map = tt.map({
  key: API_KEY,
  container: "map",
  center: brewery,
  zoom: 12,
});
//adds a marker to the location of selected brewery:
var brewMarker = new tt.Marker()
  .setLngLat([brewery.lng, brewery.lat])
  .addTo(map);
//
//Event Listener
//Pull latitude and longitude data from search:
document.addEventListener("DOMContentLoaded", function () {
  var breweryLatLong = localStorage.getItem("breweryLatLong");

  if (breweryLatLong) {
    var parsedData = JSON.parse(breweryLatLong);
    var lat = parseFloat(parsedData[0].latitude);
    var lng = parseFloat(parsedData[0].longitude);

    console.log(parsedData);
    console.log(lng);
    console.log(lat);

    map.setCenter([lng, lat]);

    brewMarker.setLngLat([lng, lat]);
    console.log(brewery);
  }
});

// SEARCH
//
//Variables
// var searchForm = $("#search-form");
// var goButton = $("#go-button");
// var addressInput = $("#address-input");
// var addressInputText = addressInput.value;
// var fuzzySearch =
//   "https://api.tomtom.com/search/2/search/" +
//   addressInputText +
//   ".json?typeahead=true&limit=1&countrySet=US&extendedPostalCodesFor=Xstr&minFuzzyLevel=1&maxFuzzyLevel=2&idxSet=Addr%2CGeo%2CPAD%2CPOI%2CStr%2CXstr&view=Unified&relatedPois=off&key=p83hoeez5IbC5O5kpydSeHBsRQ2mQwo9";

//
//Event Listeners
//
// searchForm.on("submit", function (event) {
//   event.preventDefault();
//   addressInputText = addressInput.value;
//   fuzzySearch =
//     "https://api.tomtom.com/search/2/search/" +
//     addressInputText +
//     ".json?typeahead=true&limit=1&countrySet=US&extendedPostalCodesFor=Xstr&minFuzzyLevel=1&maxFuzzyLevel=2&idxSet=Addr%2CGeo%2CPAD%2CPOI%2CStr%2CXstr&view=Unified&relatedPois=off&key=p83hoeez5IbC5O5kpydSeHBsRQ2mQwo9";
//   console.log(addressInputText);
//   fetch(fuzzySearch)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// });
