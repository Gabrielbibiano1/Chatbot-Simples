var buttonSend = document.getElementById("send");
var buttonCancel = document.getElementById("cancel");
var cumprimentos = ["Oi", "Olá", "Hello"];
var listaDeComandos = ["Formação Acadêmica", "Experiências Profissionais", "Objetivos", "Quais ferramentas sabe usar?", "Quais ferramentas está aprendendo a usar?"];
var textoRecebido = document.getElementById("mensagemEnviada").value;

function opcoesDeComandos(){
    if(textoRecebido == "comandos" || textoRecebido == "Comandos"){
          for(let i=0; i<listaDeComandos.length; i++){
            document.getElementById("mensagemRobot").value = 
            ("Digite algum dos números abaixo:" + "\n" + "1- " + listaDeComandos[0] + ";" + "\n" + "2- " + listaDeComandos[1] + ";" + "\n" + "3- " + listaDeComandos[2] + ";" + "\n" + "4- " + listaDeComandos[3] + ";" + "\n" + "5- " + listaDeComandos[4] + ";" + "\n\n" + "Ou diga alguma das palavras abaixo: " + "\n" + "-oi" + ";");
        }
    } return
}

function comprimentosAleatorios(){
    cumprimentosRandomicos = cumprimentos[Math.floor(Math.random() * cumprimentos.length)];
    if (textoRecebido == "oi" || textoRecebido == "Oi"){
        document.getElementById("mensagemRobot").value = (cumprimentosRandomicos + " Mundo!");
    } else{
        console.log("Diga algo.")
    }return
}

function retornaCampoVazio(){
    document.getElementById("inserirTexto").innerHTML = null;
    document.getElementById("mensagemEnviada").value = null;
}

buttonSend.onclick = function receberTexto(){
    textoRecebido = document.getElementById("inserirTexto").value;
    document.getElementById("mensagemEnviada").value = textoRecebido;
    document.getElementById("inserirTexto").innerHTML = "inserirTexto"[0].defaultValue;
    if(textoRecebido == "oi" || textoRecebido == "Oi"){
        comprimentosAleatorios();
    }else if(textoRecebido == "comandos" || textoRecebido == "Comandos"){
        opcoesDeComandos();
    } else if(textoRecebido == 1){
        document.getElementById("mensagemRobot").value = ("-Pós-graduação em Gestão Pública;" + "\n" + "-Bacharel em Administração;" + "\n" + "-Técnico de Assistente de Recursos Humanos;" + "\n" + "-Técnico de Administração;" + "\n" + "-Técnico de informática.");
    } else if(textoRecebido == 2){
        document.getElementById("mensagemRobot").value = ("-Digitador (Licitação);" + "\n" + "-Digitador (RH);" + "\n" + "-Chefe de Seção de Protocolo e Arquivo;" + "\n" + "-Assistente Administrativo;" + "\n" + "-Auxiliar Administrativo.")
    } else if(textoRecebido == 3){
       document.getElementById("mensagemRobot").value = ("Seguir carreira de Frontend.");
    } else if(textoRecebido == 4){
       document.getElementById("mensagemRobot").value = ("-HTML;" + "\n" + "-CSS;" + "\n" + "-Javascript.");
    } else if(textoRecebido == 5){
        document.getElementById("mensagemRobot").value = ("-Javascript.");
    } else if(textoRecebido == ""){
        document.getElementById("mensagemEnviada").value = "Diga 'comandos' para saber as opções disponíveis.";
        document.getElementById("inserirTexto").value = null;
    } else {
        retornaCampoVazio();
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
    if (document.getElementById("textoParaEnviar").value === ""){
        var valorAntigo = document.getElementById("textoParaEnviar").value;
            var novoValor;
            if (!valorAntigo) {
                novoValor = "Diga algo.";
                novoValor = document.getElementById("mensagemEnviada").value;
            } else {
                novoValor = valorAntigo;
            }
    } else{
        retornaCampoVazio();
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

