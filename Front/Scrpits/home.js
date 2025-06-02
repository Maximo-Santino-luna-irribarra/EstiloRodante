const products = document.querySelectorAll("#carouselInner > a");
const upBtn = document.getElementById("btnUp");
const downBtn = document.getElementById("btnDown");
const carouselInner = document.getElementById("carouselInner");

const VISIBLE_COUNT = 3;
const ITEM_HEIGHT = 100 + 4; // altura de imagen + márgenes, ajustá según tu diseño
let currentStart = 0;

function updateTransform() {
  const offset = currentStart * ITEM_HEIGHT;
  carouselInner.style.transform = `translateY(-${offset}px)`;
}

upBtn.addEventListener("click", () => {
  if (currentStart - VISIBLE_COUNT >= 0) {
    currentStart -= VISIBLE_COUNT;
    updateTransform();
  } else {
    alert("Ya estás en el inicio");
  }
});

downBtn.addEventListener("click", () => {
  if (currentStart + VISIBLE_COUNT < products.length) {
    currentStart += VISIBLE_COUNT;
    updateTransform();
  } else {
    alert("No hay más productos");
  }
});

updateTransform();
