//alert( " inserisci il codice sconto alpha per avere il 20% di sconto");
let input = document.getElementById("sub");
input.addEventListener("click", addPanino);

let nome = document.getElementById ("name");
let tavolo = document.getElementById ("tavolo");

console.log( nome , tavolo );

function addPanino(){
    console.log ("log 2 " , nome , tavolo);
    let h1 = document.getElementById ("dati");
    

    h1.innerHTML = nome + " " + tavolo;

}


