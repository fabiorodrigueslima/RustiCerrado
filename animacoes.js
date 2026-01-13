/* =========================
   MENU MOBILE (3 PONTOS)
========================= */
const botaoMenu = document.getElementById("menu-mobile");
const navMenu = document.getElementById("nav-menu");

if (botaoMenu) {
  botaoMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

/* =========================
   ANIMAÇÕES AO SCROLL
========================= */
const elementosAnimados = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

elementosAnimados.forEach((el) => observer.observe(el));
