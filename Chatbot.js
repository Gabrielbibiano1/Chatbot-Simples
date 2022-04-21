var buttonSend = document.getElementById("send");
var buttonCancel = document.getElementById("cancel");
var comprimentos = ["Oi", "Olá", "Hello"];
var listaDeComandos = ["Oi", "Formação Acadêmica", "Experiências Profissionais", "Objetivos", "Quais ferramentas sabe usar?", "Quais ferramentas está aprendendo a usar?"];
var textoRecebido = document.getElementById("mensagemEnviada").value;

function opcoesDeComandos(){
    if(textoRecebido == "comandos" || textoRecebido == "Comandos"){
          for(let i=0; i<listaDeComandos.length; i++){
            document.getElementById("mensagemRobot").value = 
            ("Digite algum dos comandos abaixo:" + "\n" + "- " + listaDeComandos[0] + ";" + "\n" + "- " + listaDeComandos[1] + ";" + "\n" + "- " + listaDeComandos[2] + ";" + "\n" + "- " + listaDeComandos[3] + ";" + "\n" + "- " + listaDeComandos[4] + ";" + "\n" + "- " + listaDeComandos[5] + ";");
        }
    } return
}

function comprimentosAleatorios(){
    comprimentosRandomicos = comprimentos[Math.floor(Math.random() * comprimentos.length)];
    if (textoRecebido == "oi" || textoRecebido == "Oi"){
        document.getElementById("mensagemRobot").value = (comprimentosRandomicos + " Mundo!");
    } else{
        console.log("Diga algo.")
    }return
}

function retornaCampoVazio(){
    textoRecebido = document.getElementById("inserirTexto").value;
    document.getElementById("mensagemEnviada").value = textoRecebido;
    document.getElementById("inserirTexto").innerHTML = null;
}

buttonSend.onclick = function receberTexto(){
    textoRecebido = document.getElementById("inserirTexto").value;
    document.getElementById("mensagemEnviada").value = textoRecebido;
    document.getElementById("inserirTexto").innerHTML = "inserirTexto"[0].defaultValue;
    if(textoRecebido == "oi" || textoRecebido == "Oi"){
        comprimentosAleatorios();
    }else if(textoRecebido == "comandos" || textoRecebido == "Comandos"){
        opcoesDeComandos();
    } else if(textoRecebido == "Formação Acadêmica" || textoRecebido == "formação acadêmica" || textoRecebido == "Formação acadêmica"){
        document.getElementById("mensagemRobot").value = ("-Pós-graduação em Gestão Pública;" + "\n" + "-Bacharel em Administração;" + "\n" + "-Técnico de Assistente de Recursos Humanos;" + "\n" + "-Técnico de Administração;" + "\n" + "-Técnico de informática.");
    } else if(textoRecebido == "Experiências Profissionais" || textoRecebido == "experiências profissionais" || textoRecebido == "Experiências profissionais"){
        document.getElementById("mensagemRobot").value = ("-Digitador (Licitação);" + "\n" + "-Digitador (RH);" + "\n" + "-Chefe de Seção de Protocolo e Arquivo;" + "\n" + "-Assistente Administrativo;" + "\n" + "-Auxiliar Administrativo.")
    } else if(textoRecebido == "Objetivos" || textoRecebido == "objetivos"){
       document.getElementById("mensagemRobot").value = ("Seguir carreira de Frontend.");
    } else if(textoRecebido == "Quais ferramentas sabe usar?" || textoRecebido == "quais ferramentas sabe usar?"){
       document.getElementById("mensagemRobot").value = ("-HTML;" + "\n" + "-CSS;" + "\n" + "-Javascript.");
    } else if(textoRecebido == "Quais ferramentas está aprendendo a usar?" || textoRecebido == "quais ferramentas está aprendendo a usar?"){
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

