const products = document.querySelectorAll("#productCarousel > a");
const upBtn = document.getElementById("btnUp");
const downBtn = document.getElementById("btnDown");

let currentStart = 0;
const VISIBLE_COUNT = 3;

function renderProducts() {
products.forEach((div, index) => {
    div.style.display = (index >= currentStart && index < currentStart + VISIBLE_COUNT) ? "flex" : "none";
});
}

upBtn.addEventListener("click", () => {
if (currentStart - VISIBLE_COUNT >= 0) {
    currentStart -= VISIBLE_COUNT;
    renderProducts();
}else{
    alert("Ya estas en el inicio")
}
});

downBtn.addEventListener("click", () => {
if (currentStart + VISIBLE_COUNT < products.length) {
    currentStart += VISIBLE_COUNT;
    renderProducts();
}else{
    alert("No hay mas productos")
}
});

renderProducts();

