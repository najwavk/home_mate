const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Temporary Storage
let groceries = [];
let bills = [];

// Grocery Routes
app.post("/add-grocery", (req, res) => {
    groceries.push(req.body);
    res.json({ message: "Grocery Added", groceries });
});

app.get("/groceries", (req, res) => {
    res.json(groceries);
});

// Bill Routes
app.post("/pay-bill", (req, res) => {
    bills.push(req.body);
    res.json({ message: "Bill Paid", bills });
});

app.get("/bills", (req, res) => {
    res.json(bills);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
