document.addEventListener("DOMContentLoaded", function () {
  var storedData = localStorage.getItem("breweryData");

  if (storedData) {
    var breweryData = JSON.parse(storedData);
    console.log(breweryData);

    createBreweryCards(breweryData);
  }
});

function createBreweryCards(breweries) {
  var cardContainer = document.getElementById("card-container");

  breweries.forEach(function (brewery) {
    var breweryCard = document.createElement("div");
    breweryCard.classList.add(
      "card",
      "col-12",
      "col-md-6",
      "col-lg-3",
      "m-3",
      "rounded"
    );
    var breweryCardBody = document.createElement("div");
    breweryCardBody.classList.add("card-body");
    var breweryName = document.createElement("h5");
    breweryName.classList.add("card-title", "my-2");
    breweryName.textContent = brewery.name;
    var breweryType = document.createElement("p");
    breweryType.classList.add("card-text");
    breweryType.textContent = "Type: " + brewery["brewery_type"];
    var breweryAddress = document.createElement("p");
    breweryAddress.classList.add("card-text");
    breweryAddress.textContent =
      "Address: " +
      brewery.street +
      ", " +
      brewery.city +
      ", " +
      brewery.state_province;
    var directionsButton = document.createElement("button");
    directionsButton.classList.add("btn", "btn-primary", "my-1");
    directionsButton.textContent = "Directions";

    directionsButton.addEventListener("click", function () {
      // Need to add logic to handle the button click directions for tomtom
      console.log("Button clicked for " + brewery.name);
    });
    var websiteButton = document.createElement("a");
    websiteButton.classList.add("btn", "btn-secondary", "mx-1");
    websiteButton.textContent = "Website";
    websiteButton.href = brewery.website_url;
    websiteButton.target = "_blank";

    breweryCardBody.appendChild(breweryName);
    breweryCardBody.appendChild(breweryType);
    breweryCardBody.appendChild(breweryAddress);
    breweryCardBody.appendChild(directionsButton);
    breweryCardBody.appendChild(websiteButton);
    breweryCard.appendChild(breweryCardBody);
    cardContainer.appendChild(breweryCard);
  });
}
