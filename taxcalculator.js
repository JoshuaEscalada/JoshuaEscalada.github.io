function showSelectedCode(selectedCode) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(selectedCode).classList.add('active');
}

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    if (!isNaN(income)) {
        let tax = 0;
        let remainingIncome = income;
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 400000) {
            tax = (income - 250000) * 0.2;
        } else if (income <= 800000) {
            tax = (income - 400000) * 0.25 + 30000;
        } else if (income <= 2000000) {
            tax = (income - 800000) * 0.3 + 130000;
        } else if (income <= 8000000) {
            tax = (income - 2000000) * 0.32 + 490000;
        } else {
            tax = (income - 8000000) * 0.35 + 2410000;
        }
        
        remainingIncome -= tax;
        
        document.getElementById('taxResult').innerText = `Tax to Pay: ₱${tax.toFixed(2)}`;
        document.getElementById('remainingIncome').innerText = `Remaining Income after Tax: ₱${remainingIncome.toFixed(2)}`;
    } else {
        document.getElementById('taxResult').innerText = "Please enter a valid income!";
        document.getElementById('remainingIncome').innerText = "";
    }
}
