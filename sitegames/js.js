const botaoDir = document.getElementById("dir");
const botaoEsq = document.getElementById("esq");
const cards = document.querySelector(".divcards");

botaoDir.addEventListener("click", () => {
    cards.scrollBy({ left: 160, behavior: "smooth" });
});

botaoEsq.addEventListener("click", () => {
    cards.scrollBy({ left: -160, behavior: "smooth" });
});