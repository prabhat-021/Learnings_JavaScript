function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from Url");
        setTimeout(function process() {
            let data = "Dummy data";
            console.log("Complete fetching the data");
            resolve(data);
        }, 7000)
        // reject("Reject")
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Starting Writing data in the file");
        setTimeout(function process() {
            let filename = "result.txt";
            console.log("Complete file writting");
            resolve(filename);
        }, 3000)
    });
}

function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("uplaoding started on ", url, "filename is", file);
        setTimeout(function process() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000)
    });
}

// let data=fetchData("kjhasgdjh")
// let filename=writeFile(data);
// let  response=uploadData(filename,"www.www.com")
//  THIS CODE WILL NOT WORK IN REQUIRED FASSINON 

// let downloadPromise = fetchData("hvbkjzdgfjh");
// downloadPromise.then(function process(value) {
//     console.log("Download promise fullfilled");
//     let writePromise = writeFile(value);
//     writePromise.then(function processWrite() {
//         console.log("writing of fileCompleted")
//         let uploadPromise=uploadData(value,"jasgdfkjvs");
//     })
// })
// ABOVE PIECE OF CODE SOLVES INVERSION OF CONTROL BUT STILL THERE IS CALLBACK HELL PROBLEM LEFT 


// let a=15;
// {
//     const a=10;
// }

// console.log(a);
fun1();
function fun1() {
    console.log("My first function");
}

function fun2() {
    console.log("My Second function");
}
fun2();

// arr = [1, 2, "1", "2", {
//     a: 10,
//     b: 15,
// }];
// console.log(arr);