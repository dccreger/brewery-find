// MAP DISPLAY
//
//Variables
var API_KEY = "p83hoeez5IbC5O5kpydSeHBsRQ2mQwo9";
var APPLICATION_NAME = "Brew Finder";
var APPLICATION_VERSION = "1.0";
tt.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION);
var denver = { lng: -104.984898, lat: 39.739094 };
var brewery = { lng: 0, lat: 0 };
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
  var breweryLatLng = localStorage.getItem("breweryLatLng");
  if (breweryLatLng) {
    var parsedData = JSON.parse(storedData);
    console.log(parsedData);
    brewery.lat = parsedData.latitude;
    brewery.lng = parsedData.longitude;
  }
});

// SEARCH
//
//Variables
var searchForm = $("#search-form");
var goButton = $("#go-button");
var addressInput = $("#address-input");
var addressInputText = addressInput.value;
var fuzzySearch =
  "https://api.tomtom.com/search/2/search/" +
  addressInputText +
  ".json?typeahead=true&limit=1&countrySet=US&extendedPostalCodesFor=Xstr&minFuzzyLevel=1&maxFuzzyLevel=2&idxSet=Addr%2CGeo%2CPAD%2CPOI%2CStr%2CXstr&view=Unified&relatedPois=off&key=p83hoeez5IbC5O5kpydSeHBsRQ2mQwo9";
//
//Functions
//

//
//Event Listeners
//
searchForm.on("submit", function (event) {
  event.preventDefault();
  addressInputText = addressInput.value;
  fuzzySearch =
    "https://api.tomtom.com/search/2/search/" +
    addressInputText +
    ".json?typeahead=true&limit=1&countrySet=US&extendedPostalCodesFor=Xstr&minFuzzyLevel=1&maxFuzzyLevel=2&idxSet=Addr%2CGeo%2CPAD%2CPOI%2CStr%2CXstr&view=Unified&relatedPois=off&key=p83hoeez5IbC5O5kpydSeHBsRQ2mQwo9";
  console.log(addressInputText);
  fetch(fuzzySearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
