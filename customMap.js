function mapper(arr, fn) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        let res =  fn(arr[index], index);
        result.push(res);
    }

    return result;
}

let arr = [ 55, 66, 77, 88, 99 ];
let x = mapper(arr, function cuber(v, i) {
    console.log(v, v * v * v, i);
    return v * v * v;
});

console.log(x, arr);