function todo(task) {
    console.log("Enter the function");
    setTimeout(function fun() {
        console.log("Completed ", task);
    }, 5000);
    task = "Changed";
    console.log("Exit the function");

}

console.log("Starting");
todo("Assignment");
console.log("Ending");
