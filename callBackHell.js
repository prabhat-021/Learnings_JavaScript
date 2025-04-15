function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log("Orders fetched");
        callback(["Order1", "Order2"]);
    }, 1000);
}

function processPayment(order, callback) {
    setTimeout(() => {
        console.log("Payment processed for", order);
        callback("Payment Successful");
    }, 1000);
}

// Callback Hell
getUser(1, (user) => {
    getOrders(user.id, (orders) => {
        processPayment(orders[0], (paymentStatus) => {
            console.log(paymentStatus);
        });
    });
});


// function getUser(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve({ id: userId, name: "John Doe" });
//         }, 1000);
//     });
// }

// function getOrders(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Orders fetched");
//             resolve(["Order1", "Order2"]);
//         }, 1000);
//     });
// }

// function processPayment(order) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Payment processed for", order);
//             resolve("Payment Successful");
//         }, 1000);
//     });
// }

// // Chaining Promises
// getUser(1)
//     .then(user => getOrders(user.id))
//     .then(orders => processPayment(orders[0]))
//     .then(paymentStatus => console.log(paymentStatus))
//     .catch(error => console.error(error));
