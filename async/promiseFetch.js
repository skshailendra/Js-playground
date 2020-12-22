"use strict";
// Promise : An object use as placeholder for the future result of an aysn operation
const getCountryDataPromise = function () {
  fetch(`https://restcountries.eu/rest/v2/name/india`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
getCountryDataPromise();
