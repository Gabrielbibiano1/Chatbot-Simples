var comprimentos1 = ["Oi", "Olá", "Hello"];
var pessoa1 = "oi";

function write(){
    var comprimentos1random = comprimentos1[Math.floor(Math.random() * comprimentos1.length)];
    console.log(comprimentos1random);
}

function none(){
    console.log("Diga algo.");
}

if(pessoa1 == "oi"){
    write();
} else if(pessoa1 == ""){
    none();
} else {
    none();
}