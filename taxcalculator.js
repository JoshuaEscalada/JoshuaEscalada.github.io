function showSelectedCode() {
    const selectedCode = document.getElementById('codeSelection').value;
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    if (selectedCode !== 'none') {
        document.getElementById(selectedCode).classList.add('active');
    }
}
function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;
    let remainingIncome = 0;
    
    if (isNaN(income) || income <= 0) {
        document.getElementById('taxResult').innerHTML = 'Please enter a valid income amount.';
        return;
    }
    
    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.20;
    } else if (income <= 800000) {
        tax = 30000 + (income - 400000) * 0.25;
    } else if (income <= 2000000) {
        tax = 130000 + (income - 800000) * 0.30;
    } else if (income <= 8000000) {
        tax = 490000 + (income - 2000000) * 0.32;
    } else {
        tax = 2410000 + (income - 8000000) * 0.35;
    }

    remainingIncome = income - tax;

    document.getElementById('taxResult').innerHTML = `Your estimated tax is: <span>₱${tax.toFixed(2)}</span><br>Remaining Income after tax: <span>₱${remainingIncome.toFixed(2)}</span>`;
}
