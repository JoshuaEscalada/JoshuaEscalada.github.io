function showSelectedCode() {
    const selectedCode = document.getElementById('codeSelection').value;
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    if (selectedCode !== 'none') {
        document.getElementById(selectedCode).classList.add('active');
    }
}

