document.addEventListener("DOMContentLoaded", function () {
  var storedData = localStorage.getItem("breweryData");

  if (storedData) {
    var parsedData = JSON.parse(storedData);
    console.log(parsedData);
  }
});
