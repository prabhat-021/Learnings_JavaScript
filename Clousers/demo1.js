function todo(task) {
    setTimeout(() =>{
        console.log("Completed ", task);
    }, 2000);
}

console.log("Starting");
todo("Assignment");
console.log("Ending");