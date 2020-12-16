class Bike {
  constructor(brand, model, speed = 0, brake = true) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.brake = brake;
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
const fz = new Bike("Yamaha", "FZ");
console.log(fz);

const thunderbold = new Bike("Royal Enfeild", "Thunderbold");
console.log(thunderbold);
