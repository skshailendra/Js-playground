function Watch(name = "watch") {
  let startTime,
    endTime,
    duration = 0,
    timerStarted = false;
  // Local variable Encapsulate the  Hide
  this.name = name; // Only show the essentials
  // Only these functions will operate on the private variables   Encapsulation
  this.startTimer = function () {
    if (timerStarted) throw new Error("Timer already started");
    startTime = new Date();
    timerStarted = true;
  };

  this.endTimer = function () {
    if (!timerStarted) throw new Error("Timer not started");
    endTime = new Date();
    timerStarted = false;
  };

  this.reset = function () {
    timerStarted = false;
    duration = 0;
    startTime = endTime = null;
  };

  // Hide the logic from outside of this constructor function.  Abstraction
  let calculateDifference = function () {
    if (endTime > startTime) {
      duration = (endTime - startTime) / 1000;
    }
  };

  this.getDuration = function () {
    calculateDifference();
    return duration;
  };
}
const mywatch = new Watch("mywatch");
