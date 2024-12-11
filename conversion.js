function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
        alert("Please enter a valid number.");
        return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("celsiusResult").innerHTML = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}

function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
        alert("Please enter a valid number.");
        return;
    }
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("fahrenheitResult").innerHTML = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
}

function convertMetersToFeet() {
    const meters = parseFloat(document.getElementById("meters").value);
    if (isNaN(meters)) {
        alert("Please enter a valid number.");
        return;
    }
    const feet = meters * 3.28084;
    document.getElementById("metersResult").innerHTML = `${meters} meters is equal to ${feet.toFixed(2)} feet`;
}

function convertFeetToMeters() {
    const feet = parseFloat(document.getElementById("feet").value);
    if (isNaN(feet)) {
        alert("Please enter a valid number.");
        return;
    }
    const meters = feet / 3.28084;
    document.getElementById("feetResult").innerHTML = `${feet} feet is equal to ${meters.toFixed(2)} meters`;
}
