console.time("Task1");
console.time("Task2");

function process() {
    console.log("Start");
    
    setTimeout(() => {
        console.timeEnd("Task1");
        console.log("Executed some task 1");
    }, 101);
    
    setTimeout(() => {
        console.timeEnd("Task2");
        console.log("Executed some task 2");
    }, 100);
    
    for (let index = 0; index < 10000000000; index++) {}
    // for (let index = 0; index < 10000000000; index++) {}
    // for (let index = 0; index < 10000000000; index++) {}

    console.log("End");
}

process();
console.log("Global");


// WebApi in javascripts :-

// setTimeout 
// Dom Api
// fetch()
// localStorage
// console
// Location

// Mark and sweep algorithm for garbage collection 
