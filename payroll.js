function showSelectedCode() {
    const selectedCode = document.getElementById('codeSelection').value;
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    if (selectedCode !== 'none') {
        document.getElementById(selectedCode).classList.add('active');
    }
}
function calculatePay() {
    var employeeName = document.getElementById('employeeName').value;
    var hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    if (isNaN(hoursWorked) || isNaN(hourlyRate) || hoursWorked <= 0 || hourlyRate <= 0 || employeeName.trim() === "") {
        document.getElementById('payrollResult').innerHTML = "Please enter valid details for employee name, hours, and rate.";
        return;
    }
    var totalPay = hoursWorked * hourlyRate;
    document.getElementById('payrollResult').innerHTML = `Employee: ${employeeName} <br>Total Pay: ₱${totalPay.toFixed(2)}`;
}
