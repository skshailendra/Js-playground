// Implementing the function chaining with the help of Prototypical inheritance

const Car = function () {
  this.company = "";
  this.brand = "";
  this.model = "";
  this.engine = "";
};
Car.prototype.setCompany = function (company) {
  this.company = company;
  return this;
};
Car.prototype.setBrand = function (brand) {
  this.brand = brand;
  return this;
};
Car.prototype.setModel = function (model) {
  this.model = model;
  return this;
};
Car.prototype.setEngine = function (engine) {
  this.engine = engine;
  return this;
};

const maruti = new Car()
  .setCompany("Maruti")
  .setBrand("Swift")
  .setModel("ZX")
  .setEngine("BS6");

console.log(maruti);
