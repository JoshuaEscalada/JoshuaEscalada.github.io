function showSelectedCode() {
    const selectedCode = document.getElementById('codeSelection').value;
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    if (selectedCode !== 'none') {
        document.getElementById(selectedCode).classList.add('active');
    }
}
function calculate() {
    let n = parseInt(document.getElementById('n').value);
    if (isNaN(n) || n < 1) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    document.getElementById('factorialResult').innerHTML = `Factorial of ${n} is: ${factorial}`;

    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);
    document.getElementById('sumResult').innerHTML = `Sum of first ${n} natural numbers is: ${sum}`;

    let average = 0;
    for (let k = 1; k <= n; k++) {
        average += k;
    }
    average /= n;
    document.getElementById('averageResult').innerHTML = `Average of first ${n} natural numbers is: ${average.toFixed(2)}`;
}
