function criptoValue() {
    let inputValue = document.getElementById("inputValue").value.toLowerCase();
    const dict = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat",
    };

    for (const vogal in dict) {
        const regex = new RegExp(vogal, 'g');
        inputValue = inputValue.replace(regex, dict[vogal]);
    }

    if (!inputValue.trim()) {
        const resultImage = document.getElementById("result-image");
        const resultText = document.getElementById("result-text");
        resultImage.style.display = "block";
        resultText.style.display = "block";
        resultText.getElementsByTagName("h1")[0].style.display = "block";
        resultText.getElementsByTagName("p")[0].innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
        document.getElementById('btnCopiar').style.display = 'none';
        return;
    }

    const resultImage = document.getElementById("result-image");
    const resultText = document.getElementById("result-text");
    resultImage.style.display = "none";
    resultText.style.display = "none";
    resultText.style.display = "block";
    document.querySelector('.result-text-content').classList.add('adjusted');
    resultText.getElementsByTagName("h1")[0].style.display = "none";
    resultText.getElementsByTagName("p")[0].innerText = inputValue;
    document.getElementById('btnCopiar').style.display = 'inline-block';
}

function descriptoValue() {
    let inputValue = document.getElementById("inputValue").value.toLowerCase();
    const dict = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u",
    };

    for (const vogal in dict) {
        const regex = new RegExp(vogal, 'g');
        inputValue = inputValue.replace(regex, dict[vogal]);
    }

    if (!inputValue.trim()) {
        const resultImage = document.getElementById("result-image");
        const resultText = document.getElementById("result-text");
        resultImage.style.display = "block";
        resultText.style.display = "block";
        resultText.getElementsByTagName("h1")[0].style.display = "block";
        resultText.getElementsByTagName("p")[0].innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
        document.getElementById('btnCopiar').style.display = 'none';
        return;
    }

    const resultImage = document.getElementById("result-image");
    const resultText = document.getElementById("result-text");
    resultImage.style.display = "none";
    resultText.style.display = "none";
    resultText.style.display = "block";
    document.querySelector('.result-text-content').classList.add('adjusted');
    resultText.getElementsByTagName("h1")[0].style.display = "none";
    resultText.getElementsByTagName("p")[0].innerText = inputValue;
    document.getElementById('btnCopiar').style.display = 'inline-block';
}

function copiarTexto() {
    const textoParaCopiar = document.querySelector('.result-text-content').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(function () {
        console.log('Texto copiado com sucesso!');
    }, function (err) {
        console.error('Erro ao copiar texto: ', err);
    });
}
