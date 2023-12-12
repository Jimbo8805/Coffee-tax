// PRODOTTI ORDINATI
let ordine = "";
//let ordinecookies = [];

// DA INPUT A ORDINE
function salvaTesto(){
    var inputValue = document.getElementById("inputTesto").value;
    if(inputValue.trim() !== ""){
        ordine = inputValue;
        document.getElementById("inputTesto").value = "";

        // CREAZIONE CARDS
        var lista = document.getElementById("list");
        var nuovaDiv = document.createElement("div");
        nuovaDiv.classList.add("card");
        nuovaDiv.textContent = ordine;
        lista.appendChild(nuovaDiv);
        //ordinecookies.push(ordine);

        // CREAZIONE BOTTONE ELIMINA
        var buteli = document.createElement("button");
        buteli.classList.add("buteli");
        nuovaDiv.appendChild(buteli);
        //buteli.addEventListener("click", rimdiv);
        var immagine = document.createElement("img");
        immagine.classList.add("immagine");
        immagine.src = "trash_icon.png";
        immagine.alt = "Icona Elimina";
        buteli.appendChild(immagine);

    } else {
        alert("Testa di minkia inserisci i dati prima!");
    }

    /* FUNZIONE PER RIMUOVERE LA DIV CORRETTA
    function rimdiv(){
        var divdarimuovere = buteli.parentNode;
        if(divdarimuovere){
            divdarimuovere.parentNode.removeChild(divdarimuovere);
        }

        var indx = ordinecookies.indexOf(divdarimuovere.textContent);
        ordinecookies.splice(indx, 1);

        console.log(ordinecookies);
    }*/

    //console.log(ordinecookies);
}

// FUNZIONE PER RIMUOVERE LA DIV CORRETTA
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("list").addEventListener('click', function(event){
        if (event.target.classList.contains('immagine')) {
            var cardToDelete = event.target.closest(".card");
            if(cardToDelete){
                cardToDelete.remove();
            }
        }
    });
});

// LOCAL STORAGE
function prendiSalva(){
    var miaDiv = document.getElementById("list");
    var struttura = miaDiv.innerHTML;
    localStorage.setItem("listaSalvata", struttura);
}
window.addEventListener("beforeunload", prendiSalva);

function caricaStato(){
    var statoSalvato = localStorage.getItem("listaSalvata");
    if(statoSalvato){
        var miaDiv = document.getElementById("list");
        miaDiv.innerHTML = statoSalvato;
    }
}
window.addEventListener("DOMContentLoaded", caricaStato);