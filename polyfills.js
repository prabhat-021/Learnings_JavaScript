// Map

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        //    console.log(temp.push(cb(this[i], i, this)));
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
}

// arr.reduce((initilVlaue,current, i, arr)=>{},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;

}

// let arr = [1, 2, 3, 4, 5];
// let ans = arr.myMap(function cb(ele, index, nums) {
//     console.log(ele, index, nums);
//     return ele * 2;
// });

// let ans=arr.myFilter((ele,i,arr)=>{
//     return ele===i+1;
// });

// let ans = arr.myReduce((acc, curr) => {
//     return acc + curr;
// }, 0)

// console.log(ans);

// Polyfill for call apply bind ;

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "its is not Callable");
    }

    context.fn = this;
    context.fn(...args);
}

Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== "function") {
        throw new Error(this + "its is not Callable");
    }

    if (!Array.isArray(args)) {
        throw new Error("arrguments are not array ");
    }

    context.fn = this;
    context.fn(...args);
}

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "its is not Callable");
    }

    context.fn = this;

    return function (...newArgs) {
        return context(...args, ...newArgs);
    }
}

let cart1 = {
    name: "prabhat",
    surname: "sehrawat"
}

function printName(currency) {
    console.log(this.name + " " + this.surname + currency);
}

printName.myBind(cart1, 100000);