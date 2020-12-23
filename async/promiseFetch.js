"use strict";
// Promise : An object use as placeholder for the future result of an aysn operation
const getCountryDataPromise = function () {
  fetch(`https://restcountries.eu/rest/v2/name/india`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
// getCountryDataPromise();

const getCountryDataAsync = async function () {
  const data = await fetch(`https://restcountries.eu/rest/v2/name/india`);

  console.log("gggg");
  console.log(data);
  const afterJson = await data.json();
  console.log("second");
};

getCountryDataAsync();
console.log("First");
console.log("ssss");
