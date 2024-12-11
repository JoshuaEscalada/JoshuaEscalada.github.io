// Tax Calculator
function calculateTax() {
    const income = document.getElementById("income").value;
    if (income === "") return;

    let tax;
    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.2;
    } else if (income <= 800000) {
        tax = (income - 400000) * 0.25 + 30000;
    } else {
        tax = (income - 800000) * 0.3 + 130000;
    }

    document.getElementById("taxResult").innerHTML = `Your income tax is: ₱${tax.toFixed(2)}`;
}
