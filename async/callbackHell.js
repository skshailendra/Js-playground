function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  //console.log(request.responseText);
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Get the neighbour country
    const [neighour] = data.borders;
    if (!neighour) return;
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighour}`);
    request2.send();
    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
    });
  });
}

// getCountryData("usa");

// CallBackHell Example
// setTimeout(() => {
//   console.log("1 sec");
//   setTimeout(() => {
//     console.log("2 sec");
//     setTimeout(() => {
//       console.log("3 sec");
//     }, 1000);
//   }, 1000);
// }, 1000);
