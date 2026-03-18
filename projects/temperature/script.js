function convert() {
    let c = document.getElementById("temp").value;

    if (c === "") {
        document.getElementById("result").innerText = "Inserisci un valore!";
        return;
    }

    let f = (c * 9/5) + 32;

    document.getElementById("result").innerText = `${f} °F`;
}