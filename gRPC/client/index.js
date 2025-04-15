const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const client = require("./client");
// const e = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    client.GetAll(null, (err, data) => {
        if (err) {
            return res.status(500).send("Error retrieving customer list");
        }
        res.send(data.customers);
    });
})

app.post("/create", (req, res) => {
    let newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    };

    client.Insert(newCustomer, (err, data) => {
        if (err) throw err;

        console.log("Customer created successfully", data);
        res.send({ message: "Customer created successfully" });
    });

})

app.post("/update", (req, res) => {
    let updatedCustomer = {
        id: req.body.id,  // Make sure to include `id` in the request body
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    };

    client.Update(updatedCustomer, (err, data) => {
        if (err) {
            return res.status(500).send("Error updating customer");
        }

        console.log("Customer updated successfully", data);
        res.send({ message: "Customer updated successfully" });
    });
})

app.post("/remove", (req, res) => {
    let customerId = { id: req.body.id };  // Include `id` in the request body

    client.Remove(customerId, (err, data) => {
        if (err) {
            return res.status(500).send("Error removing customer");
        }

        console.log("Customer removed successfully", data);
        res.send({ message: "Customer removed successfully" });
    });
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log("Server running at port %d", PORT);
});
