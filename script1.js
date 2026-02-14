async function addGrocery() {
    const item = document.getElementById("item").value;

    await fetch("/add-grocery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item })
    });

    alert("Grocery Added!");
}

async function payBill() {
    const type = document.getElementById("billType").value;
    const amount = document.getElementById("amount").value;

    await fetch("/pay-bill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, amount })
    });

    alert("Bill Paid!");
}
