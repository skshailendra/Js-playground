const request = new XMLHttpRequest();
console.log("ddd");
request.open("GET", "https://restcountries.eu/rest/v2/name/india");
request.send();
//console.log(request.responseText);
request.addEventListener("load", function () {
  console.log("request ", this.responseText);
});
