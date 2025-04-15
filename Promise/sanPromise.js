// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise log");
//     },0);
// });

// console.log("outside");
// console.log(pr);

console.log("start");

setTimeout(() => {
  console.log("timer 1 done");
}, 3000); // Timer of 6 seconds

const pr = new Promise(function exec(res, rej) {
  console.log("Executor callback triggered by Promise constructor");

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log("Generated Number:", randomNumber);

    if (randomNumber % 2 === 0) {
      // Random number is even
      res(randomNumber);
    } else {
      // Random number is odd
      rej(randomNumber);
    }
  }, 4000);
});

pr.then(
  function f(value) {
    console.log("executing f with value:", value);
  },
  function g(error) {
    console.log("executing g with error:", error);
  }
);

pr.then(
  function h(value) {
    console.log("executing h with value:", value);
  },
  function i(error) {
    console.log("executing i with error:", error);
  }
);

for(let i=0;i<=10000000000;i++){}
console.log("end");
