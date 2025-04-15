function fetchCustum(url, fn) {
    // download comtent of the url;
    // this downloading can take sometime;
    // this downloading the contenmt from url , and then whatever is the result ,we will pass to the callback;
    console.log("Starting downloading");
    setTimeout(function process() {
        console.log("Downloaded Completed");
        let response = "Dummy data";
        fn(response);
        console.log("Ending");
    }, 3000);


}

function writeFile(date, fn) {
    console.log("Start writing a file");
    setTimeout(function process() {
        console.log("Completed Writting");
        let filename = "output.txt";
        fn(filename);
        console.log("writing eneded");
    },4000);
}

function uploadFile(filename, newurl, fn) {
    console.log("Start uploading a file");
    setTimeout(function process() {
        console.log("File", filename, "Uploaded on", newurl);
        let uploadresponse = "SUCESS";
        fn(uploadresponse);
        console.log("uploading eneded");
    },2000);
}

fetchCustum("www.google.com", function downloadCallback(response) {
    console.log("Downloaded response is", response);
    writeFile(response, function writeCallBack(filenameResponse) {
        console.log("new file written is", filenameResponse);
        uploadFile(filenameResponse, "www.goggle.com", function uploadCallback(uploadResponse) {
            console.log("SuccessFully Uploaded", uploadResponse);
        })
    })
});

// TASK:
// 1. WAF to download data from a url;
// 2. WAF to save that downloded data in a file and return the file name ;
// 3. WAF to upload the file written in previous step to a new url ;
// 