const PROTO_PATH = "./customers.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefination = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const customersProto = grpc.loadPackageDefinition(packageDefination);

const server = new grpc.Server();

const customers = [{
    id: "asgfu",
    name: "prabhat",
    age: 22,
    address: "Meerut"
}, {
    id: "djisugvuib",
    name: "ashwin",
    age: 22,
    address: "Delhi"
}]

server.addService(customersProto.CustomerService.service, {

    getAll: (call, callback) => {
        callback(null, { customers });
    },

    get: (call, callback) => {
        let customer = customers.find(n => n.id == call.request.id);

        if (customer) {
            callback(null, customer);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "NOT_FOUND"
            });
        }
    },

    insert: (call, callback) => {
        let customer = call.request;

        customer.id = Math.random();
        customers.push(customer);
        callback(null, customer);
    },

    // update: (call, callback) => {

    // },
    // remove: (call, callback) => {

    // },
});

server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error("Error");
    } else {
        server.start();
        console.log(`grpc server is listening on ${port}`);
    }
});
