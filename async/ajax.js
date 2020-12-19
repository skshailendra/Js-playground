function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  //console.log(request.responseText);
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
  });
}

//getCountryData("usa");
// getCountryData("germany");
