let a = 2;
let b = 6;
let c = 5;

if (a + b == 3){
    console.log ('O resultado é 3');
} else if ( a == 4) {
    console.log ('O valor A é 4');
} else if ( b == 5) {
    console.log ( 'O valor B é 5');
} else if ( c == 6) {
    console.log ( 'O valor C é 6');
} else {
    console.log ('Nenhuma das condições acima!');
}


let nome = "Joaquim";
let idade = 33;

if (nome != undefined && nome == "Joaquim") {
    console.log ("Seu nome é Joaquim!");
} else if ( nome == "Adilson" && nome.length > 5 && idade <= 50) {
    console.log ( "Seu nome é Adilson");
} else {
    console.log ("Seu nome não é Adilson");
}

if ( 2 < 2) {
    console.log ("Teste");
} else if ( 1 == 1) {
    console.log ("Testando");
}
