function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    if (!isNaN(income) && !isNaN(taxRate) && income > 0 && taxRate >= 0) {
        const taxAmount = (income * taxRate) / 100;
        const remainingIncome = income - taxAmount;

        document.getElementById('taxResult').innerText = `Tax Amount: ₱${taxAmount.toFixed(2)}`;
        document.getElementById('remainingIncomeResult').innerText = `Remaining Income After Tax: ₱${remainingIncome.toFixed(2)}`;
    } else {
        document.getElementById('taxResult').innerText = "Please enter valid values for income and tax rate!";
        document.getElementById('remainingIncomeResult').innerText = "";
    }
}
