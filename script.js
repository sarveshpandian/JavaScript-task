let form = document.getElementById("expenseForm");
let nameBox = document.getElementById("name");
let amountBox = document.getElementById("amount");
let categoryBox = document.getElementById("category");
let dateBox = document.getElementById("date");
let list = document.getElementById("valuelist");

let budgetBox = document.getElementById("budget");
let saveBudgetButton = document.getElementById("saveBudget");
let warning = document.getElementById("warning");

let totalText = document.getElementById("totalSpent");
let countText = document.getElementById("expenseCount");
let remainingText = document.getElementById("remaining");

let total = 0;
let count = 0;
let budget = 0;

list.innerHTML = "<table id='table'><tr><th>Name</th><th>Amount</th><th>Category</th><th>Date</th></tr></table>";
let table = document.getElementById("table");

form.onsubmit = function (event) {
    event.preventDefault();

    let name = nameBox.value;
    let amount = Number(amountBox.value);
    let category = categoryBox.value;
    let date = dateBox.value;

    table.innerHTML += "<tr><td>" + name + "</td><td>Rs. " + amount + "</td><td>" + category + "</td><td>" + date + "</td></tr>";

    total = total + amount;
    count = count + 1;

    form.reset();
    updateNumbers();
};

saveBudgetButton.onclick = function () {
    budget = Number(budgetBox.value);
    updateNumbers();
};

function updateNumbers() {
    totalText.innerHTML = "Rs. " + total;
    countText.innerHTML = count;
    remainingText.innerHTML = "Rs. " + (budget - total);

    if (budget > 0 && total > budget) {
        warning.innerHTML = "Warning: You are over your budget!";
    } else {
        warning.innerHTML = "";
    }
}
