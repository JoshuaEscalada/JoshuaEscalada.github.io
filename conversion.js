function convertCelsiusToFahrenheit() {
    const celsius = document.getElementById("celsius").value;
    if (celsius === "") return;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("celsiusResult").innerHTML = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function convertFahrenheitToCelsius() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") return;
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("fahrenheitResult").innerHTML = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}

function convertMetersToFeet() {
    const meters = document.getElementById("meters").value;
    if (meters === "") return;
    const feet = meters * 3.28084;
    document.getElementById("metersResult").innerHTML = `${meters} meters = ${feet.toFixed(2)} feet`;
}

function convertFeetToMeters() {
    const feet = document.getElementById("feet").value;
    if (feet === "") return;
    const meters = feet / 3.28084;
    document.getElementById("feetResult").innerHTML = `${feet} feet = ${meters.toFixed(2)} meters`;
}
