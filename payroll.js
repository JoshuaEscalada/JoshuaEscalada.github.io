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

var employeeData = [];

function addEmployeeData() {
    const employeeName = document.getElementById('employeeName').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);

    if (employeeName.trim() === "" || isNaN(daysWorked) || isNaN(dailyRate)) {
        alert("Please provide valid input for all fields.");
        return;
    }

    const totalPay = daysWorked * dailyRate;

    const employee = {
        employeeName,
        daysWorked,
        dailyRate,
        totalPay
    };

    employeeData.push(employee);
    displayEmployeeData();
    clearInputFields();
}

function displayEmployeeData() {
    const table = document.getElementById('payrollTable');
    table.innerHTML = `
        <tr>
            <th>Employee Name</th>
            <th>Days Worked</th>
            <th>Daily Rate (₱)</th>
            <th>Total Pay (₱)</th>
            <th>Action</th>
        </tr>
    `;
    employeeData.forEach((data, index) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${data.employeeName}</td>
            <td>${data.daysWorked}</td>
            <td>${data.dailyRate}</td>
            <td>${data.totalPay.toFixed(2)}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
    });
}

function deleteEmployee(index) {
    employeeData.splice(index, 1);
    displayEmployeeData();
}

function clearInputFields() {
    document.getElementById('employeeName').value = "";
    document.getElementById('daysWorked').value = "";
    document.getElementById('dailyRate').value = "";
}
