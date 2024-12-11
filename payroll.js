let employeeCount = 0;
let payrollData = [];

function calculatePay() {
    const name = document.getElementById("employeeName").value;
    const daysWorked = document.getElementById("daysWorked").value;
    const dailyRate = document.getElementById("dailyRate").value;

    if (!name || !daysWorked || !dailyRate) return;

    const grossPay = daysWorked * dailyRate;
    const deduction = grossPay * 0.1; // 10% deduction
    const netPay = grossPay - deduction;

    employeeCount++;
    payrollData.push({ employeeCount, name, daysWorked, dailyRate, grossPay, deduction, netPay });
    updatePayrollTable();
}

function updatePayrollTable() {
    const tableBody = document.getElementById("payrollTableBody");
    tableBody.innerHTML = "";
    payrollData.forEach((data) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.employeeCount}</td>
            <td>${data.name}</td>
            <td>${data.daysWorked}</td>
            <td>${data.dailyRate}</td>
            <td>${data.grossPay.toFixed(2)}</td>
            <td>${data.deduction.toFixed(2)}</td>
            <td><button onclick="removeEmployee(${data.employeeCount})">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function removeEmployee(employeeNumber) {
    payrollData = payrollData.filter(employee => employee.employeeCount !== employeeNumber);
    updatePayrollTable();
}
