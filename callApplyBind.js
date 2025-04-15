// "use strict";
var value=10;
const obj = {
    value: 42,

    regularMethod: function () {
      value=20;
        function fun() {
            console.log("Regular method's this:", this);
        };
        fun()
    },

    arrowMethod: function () {
        const inner=() => {
            console.log("Arrow method's this:", this);
        }
        inner();
    }
};

obj.regularMethod(); // ❌ `this` refers to `window` or `undefined` in strict mode
obj.arrowMethod();   // ✅ `this` refers to `obj`


// let userDetails = {
//     name: "Ajay Suneja",
//     age: 28,
//     designation: "Software Engineer",
//     printDetails: ()=> {
//       console.log(this);
//     }
//   };
  
//   // Call the function
//   userDetails.printDetails(); // Output: Ajay Suneja
  
//   let userDetails2 = {
//     name: "Anuj Suneja",
//     age: 29,
//     designation: "Software Engineer",
//   };
  
  // console.log(userDetails2.name); // Output: Anuj Suneja

// userDetails.printDetails.call(userDetails2);
  