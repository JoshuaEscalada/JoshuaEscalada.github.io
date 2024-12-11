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
