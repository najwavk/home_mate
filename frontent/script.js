let items=[];
let bills=[];

function addItem(){
let name=document.getElementById("itemName").value;
let qty=document.getElementById("itemQty").value;

if(name==="" || qty===""){
alert("Enter item details");
return;
}

items.push({name,qty});
renderItems();

document.getElementById("itemName").value="";
document.getElementById("itemQty").value="";
}

function renderItems(){
let list=document.getElementById("itemList");
list.innerHTML="";

items.forEach(item=>{
let li=document.createElement("li");
li.textContent=item.name+" - Qty: "+item.qty;
list.appendChild(li);
});
}

function addBill(){
let name=document.getElementById("billName").value;
let amount=document.getElementById("billAmount").value;
let date=document.getElementById("billDate").value;

if(name==="" || amount==="" || date===""){
alert("Enter bill details");
return;
}

bills.push({name,amount,date});
renderBills();

document.getElementById("billName").value="";
document.getElementById("billAmount").value="";
document.getElementById("billDate").value="";
}

function renderBills(){
let list=document.getElementById("billList");
list.innerHTML="";

bills.forEach(bill=>{
let li=document.createElement("li");
li.textContent=bill.name+" - ₹"+bill.amount+" - Due: "+bill.date;
list.appendChild(li);
});
}
