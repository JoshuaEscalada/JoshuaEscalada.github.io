function showSelectedCode(selectedCode) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(selectedCode).classList.add('active');
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
