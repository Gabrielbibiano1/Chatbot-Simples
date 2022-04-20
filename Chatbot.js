var buttonSend = document.getElementById("send");
var buttonCancel = document.getElementById("cancel");
var comprimentos1 = ["Oi", "Olá", "Hello"];
var listaDeComandos = ["Oi", "Formação Acadêmica", "Experiências Profissionais", "Objetivos", "Quais ferramentas sabe usar?", "Quais está aprendendo a usar?"];
var textoRecebido = document.getElementById("mensagemEnviada").value;

function comandos(){
    textoRecebido = document.getElementById("mensagemEnviada").value;
    if(textoRecebido == "comandos" || textoRecebido == "Comandos"){
          for(let i=0; i<listaDeComandos.length; i++){
            document.getElementById("mensagemRobot").value = 
            ("Digite algum dos comandos abaixo:" + "\n" + "- " + listaDeComandos[0] + ";" + "\n" + "- " + listaDeComandos[1] + ";" + "\n" + "- " + listaDeComandos[2] + ";" + "\n" + "- " + listaDeComandos[3] + ";" + "\n" + "- " + listaDeComandos[4] + ";" + "\n" + "- " + listaDeComandos[5] + ";");
        }
    } return
}

function write(){
    comprimentos1random = comprimentos1[Math.floor(Math.random() * comprimentos1.length)];
    textoRecebido = document.getElementById("mensagemEnviada").value;
    if (textoRecebido == "oi" || textoRecebido == "Oi"){
        document.getElementById("mensagemRobot").value = comprimentos1random;
    } else if(textoRecebido == "comandos" || textoRecebido == "Comandos"){
        comandos();
    }else{
        console.log("Diga algo.")
    }return
}

function none(){
    textoRecebido = document.getElementById("inserirTexto").value;
    document.getElementById("mensagemEnviada").value = textoRecebido;
    document.getElementById("inserirTexto").innerHTML = "Diga algo.";
    if(textoRecebido == undefined){
        textoRecebido = "Diga algo."
    }
}

buttonSend.onclick = function receberTexto(){
    textoRecebido = document.getElementById("inserirTexto").value;
    document.getElementById("mensagemEnviada").value = textoRecebido;
    document.getElementById("inserirTexto").innerHTML = "inserirTexto"[0].defaultValue;
    if(textoRecebido == "oi" || textoRecebido == "Oi"){
        write();
    }else if(textoRecebido == "comandos" || textoRecebido == "Comandos"){
        write();
    } else if(textoRecebido == "formação acadêmica" || textoRecebido == "Formação Acadêmica"){
        document.getElementById("mensagemRobot").value = ("Pós-graduação em Gestão Pública: 03/2021-08/2021" + "\n" + "Bacharel em Administração: 01/2013-12/2019");
    } else {
        none();
    } return
}

function searchKeyPress(e){
    e = e || window.event;
    if (e.keyCode == 13){
        document.getElementById("send").click();
        return false;
    }
    return true;
}

buttonCancel.onclick = function limparTexto(){
    if (document.getElementById("textoParaEnviar").value === undefined){
        var oldValue = document.getElementById("textoParaEnviar").value;
            var newValue;
            if (!oldValue) {
                newValue = "Diga algo.";
                newValue = document.getElementById("mensagemEnviada").value;
            } else {
                newValue = oldValue;
            }
    } else{
        none();
    }
}

function confirm(){
    let select = document.querySelector("#temas");
    let optionsValue = select.options[select.selectedIndex];
    let value = optionsValue.value;
    if (value == "previsaoDoTempo"){
        var previsao = '<img src="https://www.tempo.com/wimages/foto5db3525222e522cb816233b9af68832b.png">';
        document.getElementById("informacoesDasOpcoes").innerHTML = previsao;
    }else if (value == "vendaDeEspaço1"){
            console.log("Funcionou!");
    }else if (value == "vendaDeEspaço2"){
            console.log("Funcionou!");
    }else {
        var semConteudo = "";
        document.getElementById("informacoesDasOpcoes").innerHTML = semConteudo;
    } return
}

