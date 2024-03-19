function criptoValue() {
    var inputValue = document.getElementById("inputValue").value;
    const dict = {
        "e" : "enter",
        "i" : "imes",
        "a" : "ai",
        "o" : "ober",
        "u" : "ufat",
    }

    for (let vogal in dict){
        const regex = new RegExp(vogal, 'g')
        inputValue = inputValue.replace(regex, dict[vogal]);
    }

    if (!inputValue.trim()) { // Verifica se não há valor
        // Exibe a imagem, o título e o texto original
        document.getElementById("result-image").style.display = "block";
        document.getElementById("result-text").style.display = "block";
        document.getElementById('btnCopiar').style.display = 'none'; 
        document.getElementById("result-text").getElementsByTagName("h1")[0].style.display = "block";
        document.getElementById("result-text").getElementsByTagName("p")[0].style.display = "block";
        document.getElementById("result-text").getElementsByTagName("p")[0].innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
        return; // Retorna para encerrar a função
    }

    // Oculta a imagem e o texto original
    document.getElementById("result-image").style.display = "none";
    document.getElementById("result-text").style.display = "none";
    // Exibe o resultado da criptografia
    document.getElementById("result-text").style.display = "block";
    document.querySelector('.result-text-content').classList.add('adjusted');
    document.getElementById("result-text").getElementsByTagName("h1")[0].style.display = "none";
    document.getElementById("result-text").getElementsByTagName("p")[0].innerText = inputValue;
    document.getElementById('btnCopiar').style.display = 'inline-block';
}

function descriptoValue() {
    var inputValue = document.getElementById("inputValue").value;
    const dict = {
        "enter" : "e",
        "imes" : "i",
        "ai" : "a",
        "ober" : "o",
        "ufat" : "u",
    }

    for (let vogal in dict){
        const regex = new RegExp(vogal, 'g')
        inputValue = inputValue.replace(regex, dict[vogal]);
    }

    if (!inputValue.trim()) { // Verifica se não há valor
        // Exibe a imagem, o título e o texto original
        document.getElementById("result-image").style.display = "block";
        document.getElementById("result-text").style.display = "block";
        document.getElementById('btnCopiar').style.display = 'none';
        document.getElementById("result-text").getElementsByTagName("h1")[0].style.display = "block";
        document.getElementById("result-text").getElementsByTagName("p")[0].style.display = "block";
        document.getElementById("result-text").getElementsByTagName("p")[0].innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
        return; // Retorna para encerrar a função
    }

    // Oculta a imagem e o texto original
    document.getElementById("result-image").style.display = "none";
    document.getElementById("result-text").style.display = "none";
    // Exibe o resultado da descriptografia
    document.getElementById("result-text").style.display = "block";
    document.querySelector('.result-text-content').classList.add('adjusted');
    document.getElementById("result-text").getElementsByTagName("h1")[0].style.display = "none";
    document.getElementById("result-text").getElementsByTagName("p")[0].innerText = inputValue;
    document.getElementById('btnCopiar').style.display = 'inline-block';
}
function copiarTexto() {
    var textoParaCopiar = document.querySelector('.result-text-content').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        console.log('Texto copiado com sucesso!');
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}