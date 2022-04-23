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

function cumprimentosAleatorios(){
    cumprimentosRandomicos = cumprimentos[Math.floor(Math.random() * cumprimentos.length)];
    if (textoRecebido == "oi" || textoRecebido == "Oi" || textoRecebido == "OI"){
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
        cumprimentosAleatorios();
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
    }return
}

function confirm(){
    let select = document.querySelector("#temas");
    let optionsValue = select.options[select.selectedIndex];
    let value = optionsValue.value;
    if (value == "previsaoDoTempo"){
        var previsao = '<img src="https://www.tempo.com/wimages/foto5db3525222e522cb816233b9af68832b.png">';
        document.getElementById("informacoesDasOpcoes").innerHTML = previsao;
    }else if (value == "meuPerfilGit"){
        var github = '<a href=\"https://github.com/Gabrielbibiano1/Chatbot-Simples\"><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-front-end-no-code-flaticons-flat-flat-icons-2.png" width="70" height="70"></a>';
        document.getElementById("informacoesDasOpcoes").innerHTML = github;
      /*  if(document.getElementById('checkbox').checked){
            document.location.reload(true);
        }*/
    }else if (value == "meuPerfilLinkedin"){
        var linkedin = '<a href=\"https://www.linkedin.com/in/gabriel-bibiano-santos/\"><img src="https://img.icons8.com/nolan/344/linkedin-circled.png" width="70" height="70"></a>';
        document.getElementById("informacoesDasOpcoes").innerHTML = linkedin;
     /*   if(document.getElementById('checkbox').checked){
            document.location.reload(true);
        }*/
    }else {
        var semConteudo = null;
        document.getElementById("informacoesDasOpcoes").innerHTML = semConteudo;
    } return
}

function ocultaTextArea(){
    if(document.getElementById('checkbox').checked){
        document.getElementById('mensagemEnviada').style.display = 'none';
    } else {
        document.getElementById('mensagemEnviada').style.display = 'list-item';
    } return
}

function scrollToBottom() {
    var textArea = document.getElementById('mensagemRobot');
    textArea.scrollTop = textArea.scrollHeight;
}
