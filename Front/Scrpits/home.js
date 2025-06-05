const products = document.querySelectorAll("#carouselInner > a");
const upBtn = document.getElementById("btnUp");
const downBtn = document.getElementById("btnDown");
const carouselInner = document.getElementById("carouselInner");

let VISIBLE_COUNT = window.innerWidth < 768 ? 2 : 3;
const ITEM_HEIGHT = 100 + 4; // altura de imagen + márgenes
let currentStart = 0;

// Ajustar visibilidad al redimensionar pantalla
window.addEventListener("resize", () => {
  VISIBLE_COUNT = window.innerWidth < 768 ? 2 : 3;
  currentStart = 0;
  updateTransform();
});

// Actualiza el desplazamiento vertical
function updateTransform() {
  const maxStart = Math.max(0, products.length - VISIBLE_COUNT);
  currentStart = Math.min(currentStart, maxStart);
  const offset = currentStart * ITEM_HEIGHT;
  carouselInner.style.transform = `translateY(-${offset}px)`;
  updateButtons();
}

// Habilita o deshabilita botones según posición
function updateButtons() {
  upBtn.disabled = currentStart === 0;
  downBtn.disabled = currentStart + VISIBLE_COUNT >= products.length;
}

// Eventos de botones
upBtn.addEventListener("click", () => {
  if (currentStart - VISIBLE_COUNT >= 0) {
    currentStart -= VISIBLE_COUNT;
    updateTransform();
  }
});

downBtn.addEventListener("click", () => {
  if (currentStart + VISIBLE_COUNT < products.length) {
    currentStart += VISIBLE_COUNT;
    updateTransform();
  }
});

setInterval(() => {
  if (currentStart + VISIBLE_COUNT < products.length) {
    currentStart += VISIBLE_COUNT;
  } else {
    currentStart = 0;
  }
  updateTransform();
}, 2500);

// Inicialización
updateTransform();
updateButtons();
