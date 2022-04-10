var buttonSend = document.getElementById("send");
var buttonCancel = document.getElementById("cancel");
var comprimentos1 = ["Oi", "Olá", "Hello"];

function write(){
    var comprimentos1random = comprimentos1[Math.floor(Math.random() * comprimentos1.length)];
    console.log(comprimentos1random);
}

function none(){
    var textArea = document.getElementById("inserirtexto");
    textArea.firstChild.nodeValue = "";
    console.log("Diga algo que seja possível de responder até o momento.");
}

function searchKeyPress(e){
    e = e || window.event;
    if (e.keyCode == 13){
        document.getElementById("send").click();
        return false;
    }
    return true;
}

buttonSend.onclick = function receberTexto(){
    var textoRecebido = document.getElementById("inserirtexto").value;
    document.getElementById("mensagemenviada").value = textoRecebido;
    document.getElementById("inserirtexto").innerHTML = "inserirtexto"[0].defaultValue;
    if(textoRecebido == "oi"){
        write();
    }else if(textoRecebido == null || textoRecebido == "" || textoRecebido == undefined){
        none();
    }else {
        none();
    }
}

  buttonCancel.onclick = function limparTexto() {
    document.getElementById("inserirtexto").textContent = ""
    console.log("Campo de mensagem vazio");
  }

function confirm(){
    let select = document.querySelector("#temas");
    let optionsValue = select.options[select.selectedIndex];
    let value = optionsValue.value;
    if (value == "noticias"){
        console.log("Funcionou!");
    }else if (value == "previsaoDoTempo"){
            console.log("Funcionou!");
    }else if (value == "conhecimentosGerais"){
            console.log("Funcionou!");
    }else {
        console.log("Escolha um tema");
    }
}
