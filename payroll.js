function calculateNetSalary() {
    const salary = parseFloat(document.getElementById('salary').value);
    const bonus = parseFloat(document.getElementById('bonus').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    
    if (!isNaN(salary) && !isNaN(bonus) && !isNaN(deductions)) {
        const netSalary = salary + bonus - deductions;
        document.getElementById('netSalaryResult').innerText = `Net Salary: ₱${netSalary.toFixed(2)}`;
    } else {
        document.getElementById('netSalaryResult').innerText = "Please enter valid values!";
    }
}
