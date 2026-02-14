const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const FILE = "data.json";

function readData(){
return JSON.parse(fs.readFileSync(FILE));
}

function saveData(data){
fs.writeFileSync(FILE, JSON.stringify(data,null,2));
}

// get all data
app.get("/data",(req,res)=>{
res.json(readData());
});

// add grocery item
app.post("/add-item",(req,res)=>{
let data=readData();
data.items.push(req.body);
saveData(data);
res.json({message:"Item saved"});
});

// add bill
app.post("/add-bill",(req,res)=>{
let data=readData();
data.bills.push(req.body);
saveData(data);
res.json({message:"Bill saved"});
});

// start server
app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});
