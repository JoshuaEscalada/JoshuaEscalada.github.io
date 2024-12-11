function showSelectedCode(selectedCode) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(selectedCode).classList.add('active');
}

function calculateFactorialSumAverage() {
    const number = parseInt(document.getElementById('number').value);
    if (!isNaN(number)) {
        let factorial = 1;
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
            sum += i;
        }
        let average = sum / number;
        
        document.getElementById('factorialResult').innerText = `Factorial of ${number}: ${factorial}`;
        document.getElementById('sumResult').innerText = `Sum of numbers from 1 to ${number}: ${sum}`;
        document.getElementById('averageResult').innerText = `Average: ${average.toFixed(2)}`;
    } else {
        document.getElementById('factorialResult').innerText = "Please enter a valid number!";
        document.getElementById('sumResult').innerText = "";
        document.getElementById('averageResult').innerText = "";
    }
}
