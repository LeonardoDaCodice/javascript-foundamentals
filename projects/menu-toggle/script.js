let menu = document.getElementById("menu");
let btn = document.getElementById("toggleBtn");

btn.addEventListener("click", function () {

    if (menu.style.display === "none") {
        menu.style.display = "block";
        btn.innerText = "Chiudi Menu";
    } else {
        menu.style.display = "none";
        btn.innerText = "Apri Menu";
    }

});