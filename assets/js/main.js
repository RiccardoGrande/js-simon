

//Visualizzare in pagina 5 numeri casuali..
/* let randomNumbers = []
 */



//Da lì parte un timer di 30 second

function myfunction() {
    
    for (let index = 0; index < 5; index++) {
    

        let randNumber = Math.floor(Math.random() * 100) 
        /* randomNumbers.push(randNumber); */
        console.log(randNumber);
    
        document.getElementById('number').innerHTML = randNumber;
       
    }

    

}

myfunction();

function hideRandNumb() {
    
    
    

        document.body.innerHTML = ``;
       
    
    

}

hideRandNumb();

prompt(alert('inserisci il numero che hai visto'))
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().



//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.