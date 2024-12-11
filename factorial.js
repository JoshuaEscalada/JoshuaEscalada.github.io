function showSelectedCode(selectedCode) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(selectedCode).classList.add('active');
}

function calculateFactorialSumAverage() {
    const number = parseInt(document.getElementById('number').value);
    
    if (!isNaN(number) && number > 0) {
        let factorial = 1;
        let i = 1;
        while (i <= number) {
            factorial *= i;
            i++;
        }

        let sum = 0;
        let j = 1;
        do {
            sum += j;
            j++;
        } while (j <= number);

        let sumForAverage = 0;
        for (let k = 1; k <= number; k++) {
            sumForAverage += k;
        }
        let average = sumForAverage / number;

        document.getElementById('factorialResult').innerText = `Factorial of ${number}: ${factorial}`;
        document.getElementById('sumResult').innerText = `Sum of numbers from 1 to ${number}: ${sum}`;
        document.getElementById('averageResult').innerText = `Average: ${average.toFixed(2)}`;
    } else {
        document.getElementById('factorialResult').innerText = "Please enter a valid number!";
        document.getElementById('sumResult').innerText = "";
        document.getElementById('averageResult').innerText = "";
    }
}
