let name = '';

function generateLink() {
    name = document.getElementById('nameInput').value;
    if (name) {
        document.getElementById('linkCell').innerHTML = `<a href="#">Link</a>`;
    }
}

function startAnimation() {
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');
    const nextButton = document.getElementById('nextButton');
    
    resultBox.style.display = 'block';
    resultText.style.transform = 'scale(1.5)';
    setTimeout(() => {
        resultText.style.transform = 'scale(1)';
    }, 1000);
}

function showName() {
    if (name) {
        document.getElementById('resultText').textContent = name;
        document.getElementById('nextButton').style.display = 'none';
    }
}
