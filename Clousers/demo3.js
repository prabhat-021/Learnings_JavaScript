function fun1() {
    for (let i = 0; i < 13; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`);
        }, i * 1000);
    }
    fun3();
}

function fun2() {
    for (var i = 0; i < 13; i++) {
        setTimeout(function exec() {
            console.log(`j : ${i}`);
        }, i * 1000);
        fun1();
        fun3();
    }
}

function fun3() {
    for (var i = 0; i < 3; i++) {
        function close(i) {
            setTimeout(function exec() {
                console.log(`k : ${i}`);
            }, i * 1000);
        }
        close(i);
    }
}

// Data hiding and Encaptulation 

// function Counter() {
//     var count = 0;
//     this.increment = function () {
//         count++;
//         console.log(count);
//     }
//     this.decremnet = function () {
//         count--;
//         console.log(count);
//     }
// }

// var counter=new Counter();
// counter.decremnet();
// counter.decremnet();
// counter.decremnet();

fun1();
fun2();
fun3();

// Disadvantage 
// garbage collection 
// memory taken 