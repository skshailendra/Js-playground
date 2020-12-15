// let outside = function () {
//   console.log("this ", this);
// };
// var a = "hello";
// (function (window, outside) {
//   var obj = {
//     print() {
//       console.log("print scope: ", this);
//       setTimeout(() => {
//         outside();
//       });
//       setTimeout(function () {
//         console.log(outside());
//       });
//     },
//   };
//   obj.print();
// })(window, outside);
