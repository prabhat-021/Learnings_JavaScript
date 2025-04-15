function fun(x , fn, fun2) {
    // 
    // x--> Number
    // fn -- callBack function 
    // 
    fun2();
    for (let index = 0; index < x; index++) {
        console.log(index);
    }

    fn(); // calling the callBack functions passed
    // some more logic
}

fun(10, function log() {
    console.log("Custom Logger");
}, fun2)

function fun2() {
    console.log("testing this pice of code ");
}