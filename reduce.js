// const arr=[1,2,3,4,5,6,7,8,9];

// const mytotal=arr.reduce(function (acc,curr){
//     return acc+curr;
// },0);

// console.log(mytotal);

// let x = 1;
// a();
// b();
// console.log(x);


// function a() {
//     var x;
//     console.log(x);
//     x=10;
//     console.log(x);
// }

// function b() {
//      var x = 100;
//     console.log(x);

// }

// const v=9;
// {
//     let v=10;
//     console.log(v);
// }
// console.log(v);

// function x(){
//     let x=10;
//     function y1(){
//         console.log(x);
//     }
//     function y2(){
//         console.log(x);
//     }
//     function y3(){
//         console.log(x);
//     }
//     function y4(){
//         console.log(x);
//     }
//     x=100;
//     return y1,y2,y3,y4;

// }

// const z=x();
// console.log(z);

// z();

// let students = [

//     { name: "Piyush", rollNumber: 31, marks: 80 },

//     { name: "Jenny", rollNumber: 15, marks: 69 },

//     { name: "Kaushal", rollNumber: 16, marks: 35 },

//     { name: "Dilpreet", rollNumber: 7, marks: 55 },

// ];

// let totalmarks = students.filter((stu) => stu.marks > 60)
// let tt = totalmarks.map((stu) => stu.marks + 20);
// let tt1 = tt.reduce((acc, curr) => acc + curr, 0);
// console.log(totalmarks);
// console.log(tt);
// console.log(tt1);

// function fn(){
//     var name="prabhat";

//     function fn2(){
//         alert(name);
//     }

//     setTimeout(()=>{
//         fn2();
//     },1000);

// }

// fn();


// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }

// console.log(add(8)(8)(8)());

// const property = "firstName";
// const name = "Prabhat";

// const obj = {
//     [property]: name
// }

// console.log(obj.firstName);

// const a={}
// const b={key:"b"}
// const c={key:"c"}

// a[b]=123;
// a[c]=234;

// console.log(a[b]);

// "use strict";
// const shape = {
//     radius: 20,
//     diameter() {
//         return this.radius * 2;
//     },
//     parameter: function fun() {
//         return () => this.radius * 4
//     }
// }

// console.log(shape.diameter());
// console.log(shape.parameter()());

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//     console.log(x.number *= 2);
// }

// multiply(); // 20
// multiply(); // 20
// multiply(value); // 20
// multiply(value); // 40

// function changeAgeAndReference(person) {
//     person.age = 25;  // Modifies the original object

//     person = {        // Reassigns the parameter to a new object
//         name: "John",
//         age: 50,
//     };

//     return person;    // Returns the new object
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30,
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // ?
// console.log(personObj2); // ?

// { name: 'Alex', age: 25 }
// { name: 'John', age: 50 }

// Key Takeaways:

// Objects in JavaScript are passed by reference.
// Modifying properties inside a function affects the original object.
// However, reassigning the parameter to a new object does not affect the original reference.

// let calculate = {
//     read() {
//         this.a = +prompt("a=", 0);
//         this.b = +prompt("b=", 0);
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     }
// };

// console.log(calculate.read());
// console.log(calculate.sum());
// console.log(calculate.mul());

// var length = 4;

// function cb() {
//     console.log(this.length);
// }

// const obj = {
//     length: 5,
//     method(cb) {
//         cb();
//     }
// }

// obj.method(cb);

// var status = "out";

// setTimeout(function fn() {
//     const status = "inner";

//     const data = {
//         status: "innest",
//         getstatus() {
//             return this.status;
//         }
//     }

//     console.log(data.getstatus());
//     console.log(data.getstatus.call(this));

// });

// const animals = [
//     { species: "Lion", name: "King" },
//     { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//     console.log("#" + i + " " + this.species + ": " + this.name);
// }

// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i);
// }

// const numbers = [1, 2, 3, 4, 7, 5, 6, 7];

// console.log(Math.max.apply(null, numbers));


// bind chaining doesnt work .bind().bind() only first bind will perform

//

// let simCount = 0;
// let advCount = 0;

// function btnClicked() {
//     console.log("btn-clicked");
// }

// function advceFunc(cb, limit) {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb.apply(this, args);
//             ++advCount;
//             btnCount.innerText = advCount;
//         }, limit);
//     }

// }

// function advanceThro(cb, limit) {
//     let bool = true;

//     return function (...args) {
//         if (bool) {
//             bool = false;
//                 cb(this, args);
//             setTimeout(() => {
//                 ++advCount;
//                 btnCount.innerText = advCount;
//                 bool = true;
//             }, limit);
//         }
//     }
// }

// const debounce = advceFunc(btnClicked, 1100);
// const throttle = advanceThro(btnClicked, 1100);
// const btn = document.getElementById("increment_btn");
// const btnPressed = document.querySelector(".increment_pressed");
// const btnCount = document.querySelector(".increment_count");

// window.addEventListener("resize", () => {
//     btnPressed.innerText = ++simCount;
//     throttle();
// });

// const randomValue = 21;

// function getInfo() {
//   console.log(typeof randomValue);
// //   const randomValue = 'Lydia Hallie';
// }

// getInfo();

// const myPromise = Promise.resolve(Promise.resolve('Promise'));

// function funcOne() {
//   setTimeout(() => console.log('Timeout 1!'), 0);
//   myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//   console.log('Last line 1!');
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log(`${res} 2!`)
//   setTimeout(() => console.log('Timeout 2!'), 0);
//   console.log('Last line 2!');
// }

// funcOne();
// funcTwo();

// const person = {
//     name: 'Lydia Hallie',
//     hobbies: ['coding'],
//   };

//   function addHobby(hobby, hobbies = person.hobbies) {
//     hobbies.push(hobby);
//     return hobbies;
//   }

//   addHobby('running', []);
//   addHobby('dancing');
//   addHobby('baking', person.hobbies);

//   console.log(person.hobbies);

// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])
// 	const res2  = await Promise.all([promise3, promise4])
// 	return [res1, res2]
// }

// runPromises()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))

// let ritikRuns = { name: "Ritik", total: 0, balls: { type: "leather" } };

// // let otherRuns = { ...ritikRuns }; 
// let otherRuns = structuredClone(ritikRuns);
// otherRuns.balls.type = "tennis";

// console.log(ritikRuns);
// console.log(otherRuns);

// function deepCopy(x) {
// 	let newObj = JSON.parse(JSON.stringify(x));
// 	return newObj;
// }


// function abc(name="prabhat"){
//     this.name=name;
//     return this;
// }
// abc.data=1234;
// // const value =new abc("Parbhat");
// console.log(abc(),abc.data);

// const memorize = (key) => {
//     const obj = {};

//     return (key) => {

//         if (obj[key]) {
//             return obj[key];
//         } else {
//             obj[key] = key * key;
//             return obj[key];
//         }
//     };
// };

"use strict";
console.log(typeof abcd);
let abcd;

