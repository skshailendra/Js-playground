const countryList = [
  { country: "IND", name: "a1" },
  { country: "EU", name: "a2" },
  { country: "IND", name: "a3" },
  { country: "GER", name: "a4" },
];
const singObj = countryList.reduce((acc, elem) => {
  if (elem.country === "IND") {
    acc = acc + elem.name;
  }
  return acc;
});
// console.log(singObj);
