function calculatePay() {
    const employeeName = document.getElementById("employeeName").value;
    const daysWorked = parseFloat(document.getElementById("daysWorked").value);
    const dailyRate = parseFloat(document.getElementById("dailyRate").value);
    const deductionAmount = parseFloat(document.getElementById("deductionAmount").value);

    if (!employeeName || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    const payrollResult = document.getElementById("payrollResult");
    payrollResult.innerHTML = `
        <p>Employee Name: ${employeeName}</p>
        <p>Gross Pay: ₱${grossPay.toFixed(2)}</p>
        <p>Deduction Amount: ₱${deductionAmount.toFixed(2)}</p>
        <p>Net Pay: ₱${netPay.toFixed(2)}</p>
    `;

    const payrollTable = document.getElementById("payrollTable").getElementsByTagName("tbody")[0];
    const newRow = payrollTable.insertRow();
    newRow.innerHTML = `
        <td>${employeeName}</td>
        <td>${daysWorked}</td>
        <td>₱${dailyRate.toFixed(2)}</td>
        <td>₱${grossPay.toFixed(2)}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
