

//Visualizzare in pagina 5 numeri casuali..
for (let index = 0; index < 5; index++) {

    const randNumber = Math.floor(Math.random() * 5) 

    console.log(randNumber);

    document.body.innerHTML += randNumber;
}

//Da lì parte un timer di 30 secondi

setTimeout(function () {
    
    for (let index = 0; index < 5; index++) {

        const randNumber = Math.floor(Math.random() * 5) 
    
        console.log(randNumber);
    
        document.body.innerHTML += randNumber;
    }
  }, tempo_cottura * 1000);
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().



//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.