console.log("JavaScript collegato correttamente!");


function salutaUtente(){

    let nome = document.getElementById("nomeInput").value;

    let utente = {
        nome : nome
    };


    document.getElementById("output").innerText="Ciao "+utente.nome;

}