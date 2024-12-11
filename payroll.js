let employeeNumber = 1;
function calculatePay() {
    const name = document.getElementById('employeeName').value;
    const daysWorked = parseInt(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const grossPay = daysWorked * dailyRate;
    const deduction = grossPay * 0.1;
    const netPay = grossPay - deduction;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${employeeNumber++}</td>
        <td>${name}</td>
        <td>${daysWorked}</td>
        <td>${dailyRate.toFixed(2)}</td>
        <td>${grossPay.toFixed(2)}</td>
        <td>${deduction.toFixed(2)}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;
    document.querySelector('#payrollTable tbody').appendChild(row);
}

function deleteRow(button) {
    button.closest('tr').remove();
}
