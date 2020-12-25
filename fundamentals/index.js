const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// Case 1
let [x, y] = days;
console.log(x, y); // Monday , Tuesday

// Case 2
let [a, , b] = days;
console.log(a, b); // Monday , Wednesday

// Case 3
let { q, w } = days;
console.log(q, w); // Undefined undefined // No Error because left hand side is not an array

// Swap two values inside array
[x, y] = [y, x]; // Before Swap x = Monday , y= Tuesday
console.log(x, y); // After Swap x = Tuesday , y= Monday
