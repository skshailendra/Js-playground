class MyBike {
  constructor(brand, model, speed = 0, brake = true) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.brake = brake;
  }
  #bc = "private"; // Encapsulation
  getPrivate() {
    return this.#bc;
  }
  get km() {
    return "km";
  }
  getBrand() {
    return this.brand;
  }
  getModel() {
    return this.model;
  }
  accelerate() {
    this.speed += 10;
  }
  slowSpeed() {
    this.speed -= 10;
  }
  brake() {
    this.brake = true;
    this.speed = 0;
  }
}
const fz1 = new MyBike("Yamaha", "FZ");
console.log(fz1);

const thunderbold1 = new MyBike("Royal Enfeild", "Thunderbold");
console.log(thunderbold1);
