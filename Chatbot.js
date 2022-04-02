var buttonSend = document.getElementById("send");
var comprimentos1 = ["Oi", "Olá", "Hello"];
var pessoa = document.getElementById("inserirTexto");
var texto = pessoa;

function write(){
    var comprimentos1random = comprimentos1[Math.floor(Math.random() * comprimentos1.length)];
    console.log(comprimentos1random);
}

function none(){
    console.log("Diga algo.");
}

buttonSend.onclick = function(){
if(pessoa != "" & texto != ""){
    write();
}else if(pessoa == ""){
    none();
}else {
    none();
}
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