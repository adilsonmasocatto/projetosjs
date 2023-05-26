let nome = "Adilson";
for (let i = 0; i < 10; i = i + 1) {
    if ( i == 8 ) {
        nome = "João";
    }

    if ( i == 8 && nome == "João"){
        console.log ("Pode parar de executar");
        break;
    }

    console.log (i);
}