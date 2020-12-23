const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const myLocation = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  console.log(lat, lng);
  const locateMe = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const locateMyLocation = await locateMe.json();
  const { country, state, region, city } = locateMyLocation;
  console.log(country, state, city);
};

myLocation();
