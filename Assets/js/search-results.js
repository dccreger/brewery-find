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
      "shadow",
      "p-3",
      "mb-5",
      "bg-body-tertiary",
      "rounded"
    );
    var breweryCardBody = document.createElement("div");
    breweryCardBody.classList.add("card-body");
    var breweryName = document.createElement("h5");
    breweryName.classList.add("card-title", "my-2");
    breweryName.textContent = brewery.name;
    var breweryType = document.createElement("p");
    breweryType.classList.add("card-text", "type-banner");
    breweryType.textContent = "Type: " + brewery["brewery_type"];
    var breweryAddress = document.createElement("p");
    breweryAddress.classList.add("card-text");
    breweryAddress.innerHTML =
      brewery.street +
      "<br>" +
      brewery.city +
      ", " +
      brewery.state_province +
      " " +
      brewery.postal_code;
    var websiteButton = document.createElement("a");
    websiteButton.classList.add("button-color", "btn", "mx-2");
    websiteButton.textContent = "Website";
    websiteButton.href = brewery.website_url;
    websiteButton.target = "_blank";
    var directionsButton = document.createElement("button");
    directionsButton.classList.add("button-color", "btn", "my-2");
    directionsButton.textContent = "Directions";

    directionsButton.addEventListener("click", function () {
      var savedAddress = JSON.parse(localStorage.getItem("")) || [];
      savedAddress.push(
        brewery.street +
          " " +
          brewery.city +
          ", " +
          brewery.state_province +
          ", " +
          brewery.postal_code
      );
      var savedLatLong = JSON.parse(localStorage.getItem("")) || [];
      savedLatLong.push({
        latitude: brewery.latitude,
        longitude: brewery.longitude,
      });

      localStorage.setItem("breweryLatLong", JSON.stringify(savedLatLong));
      localStorage.setItem("brewery", JSON.stringify(savedAddress));
      window.location.href = "./navigate.html";
      // // Need to add logic to handle the button click directions for tomtom
      console.log("Button clicked for " + brewery.name);
      if (latitude + longitude === null) {
        var modal = document.querySelector(".modal");
        var modalTitle = document.createElement("div");
        modalTitle.classList.add("modal-header");
        var modalContent = document.createElement("h5");
        modalContent.classList.add("modal-title");
        modalContent.textContent =
          "Sorry directions are not currently available";
        var modalBtn = document.createElement("button");
        modalBtn.classList.add("button-color", "btn", "my-2");
        modalBtn.textContent = "Close";
        modal.appendChild(modalTitle);
        modal.appendChild(modalContent);
        modal.appendChild(modalBtn);
      }
    });

    breweryCardBody.appendChild(breweryName);
    breweryCardBody.appendChild(breweryType);
    breweryCardBody.appendChild(breweryAddress);
    breweryCardBody.appendChild(directionsButton);
    breweryCardBody.appendChild(websiteButton);
    breweryCard.appendChild(breweryCardBody);
    cardContainer.appendChild(breweryCard);
  });
}
