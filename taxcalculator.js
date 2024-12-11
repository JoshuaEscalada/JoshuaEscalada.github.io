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

function calculatePay() {
    var employeeName = document.getElementById('employeeName').value;
    var daysWorked = parseFloat(document.getElementById('daysWorked').value); 
    var dailyRate = parseFloat(document.getElementById('dailyRate').value); 

    if (isNaN(daysWorked) || isNaN(dailyRate) || daysWorked <= 0 || dailyRate <= 0 || employeeName.trim() === "") { 
        document.getElementById('payrollResult').innerHTML = "Please enter valid details for employee name, days, and rate."; 
        return;
    }
    
    var totalPay = daysWorked * dailyRate;
    document.getElementById('payrollResult').innerHTML = `Employee: ${employeeName} <br>Total Pay: ₱${totalPay.toFixed(2)}`;
    
    // Update payroll table
    const table = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    row.insertCell(0).innerText = employeeName;
    row.insertCell(1).innerText = daysWorked;
    row.insertCell(2).innerText = `₱${dailyRate.toFixed(2)}`;
    row.insertCell(3).innerText = `₱${totalPay.toFixed(2)}`;
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        table.deleteRow(row.rowIndex);
    };
    row.insertCell(4).appendChild(deleteButton);
}
