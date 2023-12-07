var searchField = document.getElementById("search-input");
var selectField = document.getElementById("type");
var citySearch = searchField.value;
var selectedType = selectField.value;
var searchForm = document.getElementById("search-form");
var brewUrl =
  "https:api.openbrewerydb.org/v1/breweries?by_city=" +
  citySearch +
  "&" +
  selectedType +
  "&per_page=8";
var searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  citySearch = searchField.value;
  selectedType = selectField.value;
  brewUrl =
    "https://api.openbrewerydb.org/v1/breweries?by_city=" +
    citySearch +
    "&" +
    selectedType +
    "&per_page=6";

  fetch(brewUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(brewUrl);
      console.log(data);
      console.log(citySearch);
      console.log(selectedType);
      localStorage.setItem("breweryData", JSON.stringify(data));
      window.location.href =
        "file:///Users/chancecreger/Desktop/brewery-find/search-results.html"; //need to change this once deployed.
    });
});
