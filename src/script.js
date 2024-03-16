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
    document.getElementById("criptoValue").innerText = inputValue;
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
    document.getElementById("criptoValue").innerText = inputValue;
}