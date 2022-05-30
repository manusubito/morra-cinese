function estrazione() { //Metodo per estrarre la scelta della CPU
    var a;
    do {
        a = parseInt(Math.random() * 100);
    } while (a > 90);

    if (a < 30) {
        return "foglia";
    } else if (a < 60) {
        return "forbice";
    } else {
        return "sasso";
    }
}

function mostraScelta() { //Onclick sul bottone per iniziare il gioco
    //Mostro la scelta tra foglia, forbice e sasso nel you e nascondo il bottone
    document.getElementById("scelta").style.display = "block";
    document.getElementById("inizia").style.display = "none";
    //Nascondo le background image dei risultati precedenti
    document.getElementById("you").style.backgroundImage = "";
    document.getElementById("cpu").style.backgroundImage = "";
    //Nascondo il testo in fondo che mostra l'esito
    document.getElementById("risultato").style.display = "none";
}

function gioca(n) {//Metodo onclick su foglia,forbice e sasso
    //Istanzio degli elementi necessari
    var risultato = document.getElementById("risultato");
    var punteggioCpu = document.getElementById("punteggioCpu");
    var punteggioYou = document.getElementById("punteggioYou");

    //Istanzio il risultato della CPU in una variabile
    var risultatoCpu = estrazione();

    //Mostro il risultato
    risultato.style.display = "block";

    //Nascondo nuovamente la scelta e rimostro il bottone per giocare di nuovo
    document.getElementById("scelta").style.display = "none";
    document.getElementById("inizia").style.display = "inline-block";

    switch (n) { //In base al bottone premuto entra in un case

        case "foglia":
            //Imposta la background image della scelta YOU
            document.getElementById("you").style.backgroundImage = "url(/immagini/foglia.png)";

            if (risultatoCpu == "foglia") {
                risultato.innerHTML = "Hai pareggiato :|";
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/foglia.png)";
                break;
            } else if (risultatoCpu == "forbice") {
                risultato.innerHTML = "Hai perso D:";
                punteggioCpu.innerHTML = parseInt(punteggioCpu.innerHTML) + 1;
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/forbice.png)";
                break;
            } else {
                risultato.innerHTML = "Hai vinto :D";
                punteggioYou.innerHTML = parseInt(punteggioYou.innerHTML) + 1;
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/sasso.png)";
                break;
            }

        case "forbice":
            //Imposta la background image della scelta YOU
            document.getElementById("you").style.backgroundImage = "url(/immagini/forbice.png)";

            if (risultatoCpu == "foglia") {
                risultato.innerHTML = "Hai vinto :D";
                punteggioYou.innerHTML = parseInt(punteggioYou.innerHTML) + 1;
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/foglia.png)";
                break;
            } else if (risultatoCpu == "forbice") {
                risultato.innerHTML = "Hai pareggiato :|";
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/forbice.png)";
                break;
            } else {
                risultato.innerHTML = "Hai perso D:";
                punteggioCpu.innerHTML = parseInt(punteggioCpu.innerHTML) + 1;
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/sasso.png)";
                break;
            }

        case "sasso":
            //Imposta la background image della scelta YOU
            document.getElementById("you").style.backgroundImage = "url(/immagini/sasso.png)";

            if (risultatoCpu == "foglia") {
                risultato.innerHTML = "Hai perso D:";
                punteggioCpu.innerHTML = parseInt(punteggioCpu.innerHTML) + 1;
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/foglia.png)";
                break;
            } else if (risultatoCpu == "forbice") {
                risultato.innerHTML = "Hai vinto :D";
                punteggioYou.innerHTML = parseInt(punteggioYou.innerHTML) + 1;
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/forbice.png)";
                break;
            } else {
                risultato.innerHTML = "Hai pareggiato :|";
                //Imposto la background image della scelta CPU
                document.getElementById("cpu").style.backgroundImage = "url(/immagini/sasso.png)";
                break;
            }
    }
}
