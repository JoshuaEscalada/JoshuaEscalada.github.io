function showSelectedCode(selectedCode) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(selectedCode).classList.add('active');
}

function addPayrollEntry() {
    const name = document.getElementById('empName').value;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    if (name && !isNaN(hoursWorked) && !isNaN(hourlyRate) && !isNaN(deductions)) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${hoursWorked}</td>
            <td>₱${hourlyRate}</td>
            <td>₱${deductions}</td>
            <td><button onclick="deletePayrollEntry(this)">Delete</button></td>
        `;
        document.querySelector('#payrollTable tbody').appendChild(row);

        document.getElementById('empName').value = '';
        document.getElementById('hoursWorked').value = '';
        document.getElementById('hourlyRate').value = '';
        document.getElementById('deductions').value = '';
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function deletePayrollEntry(button) {
    const row = button.closest('tr');
    row.remove();
}
