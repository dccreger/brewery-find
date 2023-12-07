var form = document.getElementById("search-field");
var API_KEY = "p83hoeez5IbC5O5kpydSeHBsRQ2mQwo9";
var APPLICATION_NAME = "Brew Finder";
var APPLICATION_VERSION = "1.0";
tt.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION);
var denver = { lng: -104.984898, lat: 39.739094 };

var map = tt.map({
  key: "p83hoeez5IbC5O5kpydSeHBsRQ2mQwo9",
  container: "map",
  center: [0, 0],
  zoom: 1,
});
