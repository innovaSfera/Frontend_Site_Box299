// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("menu", "toggle");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;

function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 5
    ? header.classList.add("sticky-action")
    : header.classList.remove("sticky-action");
}
window.addEventListener("scroll", stickyHeader);

// ===== FILTRO =====
const filtros = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".card");

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    filtros.forEach((f) => f.classList.remove("ativo"));
    filtro.classList.add("ativo");

    const categoriaSelecionada = filtro.getAttribute("data-filter");

    cards.forEach((card) => {
      const categoriaCard = card.getAttribute("data-category");
      if (
        categoriaSelecionada === "todos" ||
        categoriaCard === categoriaSelecionada
      ) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Modal Zoom
const zoomButtons = document.querySelectorAll(".zoom-icon");
const modal = document.getElementById("modalZoom");
const modalImg = document.getElementById("imagemModal");
const fecharModal = document.getElementById("fecharModal");

zoomButtons.forEach((botao) => {
  botao.addEventListener("click", () => {
    const img = botao.parentElement.querySelector("img");
    modalImg.src = img.src;
    modal.classList.remove("hidden");
  });
});

fecharModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Botão para o WhatsApp
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", () => {
    window.open("https://wa.me/5511947288343", "_blank");
  });
});
