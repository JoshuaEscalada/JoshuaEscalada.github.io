function calculatePay() {
    var employeeName = document.getElementById('employeeName').value;
    var daysWorked = parseFloat(document.getElementById('daysWorked').value);
    var dailyRate = parseFloat(document.getElementById('dailyRate').value);
    
    if (isNaN(daysWorked) || isNaN(dailyRate) || daysWorked <= 0 || dailyRate <= 0 || employeeName.trim() === "") {
        document.getElementById('payrollResult').innerHTML = "Please enter valid details for employee name, days worked, and daily rate.";
        return;
    }
    
    var totalPay = daysWorked * dailyRate;
    document.getElementById('payrollResult').innerHTML = `Employee: ${employeeName} <br>Total Pay: ₱${totalPay.toFixed(2)}`;
}

function addEmployeeData() {
    var employeeName = document.getElementById('employeeName').value;
    var daysWorked = parseFloat(document.getElementById('daysWorked').value);
    var dailyRate = parseFloat(document.getElementById('dailyRate').value);
    
    if (isNaN(daysWorked) || isNaN(dailyRate) || daysWorked <= 0 || dailyRate <= 0 || employeeName.trim() === "") {
        alert("Please enter valid employee details.");
        return;
    }
    
    var totalPay = daysWorked * dailyRate;
    
    var row = document.createElement("tr");
    
    var nameCell = document.createElement("td");
    nameCell.innerText = employeeName;
    
    var daysCell = document.createElement("td");
    daysCell.innerText = daysWorked;
    
    var rateCell = document.createElement("td");
    rateCell.innerText = `₱${dailyRate.toFixed(2)}`;
    
    var totalPayCell = document.createElement("td");
    totalPayCell.innerText = `₱${totalPay.toFixed(2)}`;
    
    var actionCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        row.remove();
    };
    actionCell.appendChild(deleteButton);
    
    row.appendChild(nameCell);
    row.appendChild(daysCell);
    row.appendChild(rateCell);
    row.appendChild(totalPayCell);
    row.appendChild(actionCell);
    
    document.getElementById('payrollTable').appendChild(row);
    
    document.getElementById('employeeName').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
}
