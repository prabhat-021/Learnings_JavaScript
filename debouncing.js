let counter = 0;

const getData = () => {
     
    console.log("Fetching Data..", counter++);
};

// Debounce function
const debounce = function (fn, delay) {
    let timer;
    return function (...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};

// Creating a debounced function
const betterFunction = debounce(getData, 300);

// // Simulating multiple rapid calls
// betterFunction();
// betterFunction();
// betterFunction();

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", debounce((event) => {
    console.log("Searching for:", event.target.value);
}, 500));


const loggerFunc = () => {
    console.count("Throttled Function");
};

const throttle = (fn, limit) => {
    let flag = true; // Controls function execution

    return function () {
        // let context = this;
        let args = arguments;
        // console.log(context);
        
        if (flag) {
            fn.apply( args); // Execute function
            
            flag = false;

            setTimeout(() => {
                flag = true; // Reset flag after `limit` ms
            }, limit);
        }
    };
};
const betterLoggerFunction = throttle(loggerFunc, 2000);
window.addEventListener("resize", betterLoggerFunction); // Throttled
// window.addEventListener("resize", loggerFunc); // Unthrottled
