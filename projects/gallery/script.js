let thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(img => {
    img.addEventListener("click", function () {
        document.getElementById("mainImage").src = this.src;
    });
});