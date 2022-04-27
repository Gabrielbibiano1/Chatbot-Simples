var buttonSend = document.getElementById("send");
var buttonCancel = document.getElementById("cancel");
var textoRecebido = document.getElementById("mensagemEnviada").value;
var cumprimentos = ["Oi", "Olá", "Hello"];
var listaDeNumerosDosComandos = ["1- ", "2- ", "3- ", "4- ", "5- "];
var listaDeComandos = ["Formação Acadêmica", "Experiências Profissionais", "Objetivos", "Quais ferramentas sabe usar?", "Quais ferramentas está aprendendo a usar?"];
var opcao1 = ["-Pós-graduação em Gestão Pública;", "-Bacharel em Administração;", "-Técnico de Assistente de Recursos Humanos;", "-Técnico de Administração;", "-Técnico de informática."];
var opcao2 = ["-Digitador (Licitação);", "-Digitador (RH);", "-Chefe de Seção de Protocolo e Arquivo;", "-Assistente Administrativo;", "-Auxiliar Administrativo."];
var opcao3 = ["Seguir carreira de Frontend."];
var opcao4 = ["-HTML;", "-CSS;", "-Javascript."];
var opcao5 = ["-Javascript."];

function seFoiDitoMaisDeUmaVez(){
    textoRecebido = "comandos";
    textoRecebido.repeat(1);
    console.log(textoRecebido);
}

function opcoesDeComandos(){
    if(textoRecebido == "comandos" || textoRecebido == "Comandos"){
        evitaRespostaDuplicadaDoRobo();
        document.getElementById("mensagemRobot").value += ("Diga algum dos números abaixo:" + "\n");
        seFoiDitoMaisDeUmaVez();
          for(let i=0; i<listaDeNumerosDosComandos.length; i++){
            for(let j=0; j<listaDeComandos.length; j++){
            }
            document.getElementById("mensagemRobot").value += (listaDeNumerosDosComandos[i] + listaDeComandos[i] + "\n");      
        }
    } return
} evitaRespostaDuplicadaDoRobo();

function cumprimentosAleatorios(){
    cumprimentosRandomicos = cumprimentos[Math.floor(Math.random() * cumprimentos.length)];
    if (textoRecebido == "oi" || textoRecebido == "Oi" || textoRecebido == "OI"){
        document.getElementById("mensagemRobot").value = (cumprimentosRandomicos);
    } else{
        console.log("Diga algo.")
    }return
}

function retornaCampoVazio(){
    document.getElementById("inserirTexto").innerHTML = null;
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
        retornaCampoVazio();
        evitaRespostaDuplicadaDoRobo();
        for(i=0; i<opcao1.length; i++){
            document.getElementById("mensagemRobot").value += (opcao1[i] + "\n");
        }
    } else if(textoRecebido == 2){
        retornaCampoVazio();
        evitaRespostaDuplicadaDoRobo();
        for(i=0; i<opcao2.length; i++){
            document.getElementById("mensagemRobot").value += (opcao2[i] + "\n");
        }
    } else if(textoRecebido == 3){
        retornaCampoVazio();
        evitaRespostaDuplicadaDoRobo();
        for(i=0; i<opcao3.length; i++){
            document.getElementById("mensagemRobot").value += (opcao3[i] + "\n");
        }
    } else if(textoRecebido == 4){
        retornaCampoVazio();
        evitaRespostaDuplicadaDoRobo();
        for(i=0; i<opcao4.length; i++){
            document.getElementById("mensagemRobot").value += (opcao4[i] + "\n");
        }
     } else if(textoRecebido == 5){
        retornaCampoVazio();
        evitaRespostaDuplicadaDoRobo();
        for(i=0; i<opcao5.length; i++){
            document.getElementById("mensagemRobot").value += (opcao5[i] + "\n");
        }
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

function evitaRespostaDuplicadaDoRobo(){
     var duplicatas = ["comandos", "Comandos", "1", "2", "3", "4", "5"];
    for(i=0; i<duplicatas.length; i++){
        }
    if(document.getElementById("mensagemEnviada").value == duplicatas[i]){
    }
    document.getElementById("mensagemRobot").value = null;
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
    }else if (value == "meuPerfilLinkedin"){
        var linkedin = '<a href=\"https://www.linkedin.com/in/gabriel-bibiano-santos/\"><img src="https://img.icons8.com/nolan/344/linkedin-circled.png" width="70" height="70"></a>';
        document.getElementById("informacoesDasOpcoes").innerHTML = linkedin;
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

function atualizaPagina(){
    checkboxAtualiza = document.getElementById('checkboxAtualiza')
    if(checkboxAtualiza.checked){
        document.location.reload(true);
    }
}atualizaPagina()


      