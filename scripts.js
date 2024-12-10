function showSelectedCode() {
    const selectedCode = document.getElementById('codeSelection').value;
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    if (selectedCode !== 'none') {
        document.getElementById(selectedCode).classList.add('active');
    }
}

function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('celsiusResult').innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('celsiusResult').innerText = "Please enter a valid number!";
    }
}

function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('fahrenheitResult').innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('fahrenheitResult').innerText = "Please enter a valid number!";
    }
}

function convertMetersToFeet() {
    const meters = parseFloat(document.getElementById('meters').value);
    if (!isNaN(meters)) {
        const feet = meters * 3.28084;
        document.getElementById('metersResult').innerText = `${meters} meters = ${feet.toFixed(2)} feet`;
    } else {
        document.getElementById('metersResult').innerText = "Please enter a valid number!";
    }
}

function convertFeetToMeters() {
    const feet = parseFloat(document.getElementById('feet').value);
    if (!isNaN(feet)) {
        const meters = feet / 3.28084;
        document.getElementById('feetResult').innerText = `${feet} feet = ${meters.toFixed(2)} meters`;
    } else {
        document.getElementById('feetResult').innerText = "Please enter a valid number!";
    }
}

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;
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
    document.getElementById('taxResult').innerHTML = `Your estimated tax is: <span>₱${tax.toFixed(2)}</span>`;
}

function calculate() {
    let n = parseInt(document.getElementById('n').value);
    if (isNaN(n) || n < 1) {
        alert("Please enter a valid number greater than 0.");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    document.getElementById('factorialResult').innerHTML = `Factorial of ${n} is: ${factorial}`;
    let sum = (n * (n + 1)) / 2;
    document.getElementById('sumResult').innerHTML = `Sum of first ${n} natural numbers is: ${sum}`;
    let average = sum / n;
    document.getElementById('averageResult').innerHTML = `Average of first ${n} natural numbers is: ${average.toFixed(2)}`;
}

function calculatePay() {
    var hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    if (isNaN(hoursWorked) || isNaN(hourlyRate) || hoursWorked <= 0 || hourlyRate <= 0) {
        document.getElementById('payrollResult').innerHTML = "Please enter valid numbers for both hours and rate.";
        return;
    }
    var totalPay = hoursWorked * hourlyRate;
    document.getElementById('payrollResult').innerHTML = "Total Pay: ₱" + totalPay.toFixed(2);
}
