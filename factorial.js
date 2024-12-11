function calculateFactorial() {
    const number = parseInt(document.getElementById('number').value);
    if (!isNaN(number) && number >= 0) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        document.getElementById('factorialResult').innerText = `Factorial of ${number} is ${result}`;
    } else {
        document.getElementById('factorialResult').innerText = "Please enter a valid number!";
    }
}

function calculateSumAndAverage() {
    const numbers = document.getElementById('numbers').value.split(',').map(num => parseFloat(num.trim()));
    if (numbers.every(num => !isNaN(num))) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
        document.getElementById('sumResult').innerText = `Sum: ${sum}`;
        document.getElementById('averageResult').innerText = `Average: ${average}`;
    } else {
        document.getElementById('sumResult').innerText = "Please enter valid numbers!";
        document.getElementById('averageResult').innerText = "";
    }
}
