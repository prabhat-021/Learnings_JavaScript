const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

const calculate = function (radiusArray, logic) {
    const output = [];
    for (let i = 0; i < radiusArray.length; i++) {
        output.push(logic(radiusArray[i]));
    }
    return output;
};

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

const sum = radius.reduce((acc, curr) => {
    return acc + curr;
}, 0);

const max = radius.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
}, 0);
console.log(sum);
console.log(max);

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

const ageCount = users.reduce((acc, user) => {
    acc[user.age] = (acc[user.age] || 0) + 1;
    return acc;
}, {});

console.log(ageCount);

