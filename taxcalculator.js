function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    let taxAmount = 0;
    let remainingIncome = 0;
    
    if (income < 250000) {
        taxAmount = 0;
        remainingIncome = income;
        document.getElementById('taxResult').innerText = "No Tax";
    } else if (income <= 400000) {
        taxAmount = (income - 250000) * 0.2;
        remainingIncome = income - taxAmount;
        document.getElementById('taxResult').innerText = "Tax = ₱" + taxAmount.toFixed(2);
    } else if (income <= 800000) {
        taxAmount = 30000 + (income - 400000) * 0.25;
        remainingIncome = income - taxAmount;
        document.getElementById('taxResult').innerText = "Tax = ₱" + taxAmount.toFixed(2);
    } else {
        taxAmount = 130000 + (income - 800000) * 0.30;
        remainingIncome = income - taxAmount;
        document.getElementById('taxResult').innerText = "Tax = ₱" + taxAmount.toFixed(2);
    }
    
    document.getElementById('remainingIncomeResult').innerText = "Remaining Income after Tax = ₱" + remainingIncome.toFixed(2);
}
