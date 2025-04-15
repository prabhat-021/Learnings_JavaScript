function fun(inputString, fun1) {
    let output = inputString.split(',');
    for (let i = 0; i < output.length; i++) {
        fun1(output[i]);
        fun1(output[i]);
    }
}

fun("name:prabhat,subject:javaScript", function process(ip) {
    let arr = ip.split(':');
    console.log("{", arr[0], "=>", arr[1], "}");
})