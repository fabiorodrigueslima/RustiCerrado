/* =========================
   MENU MOBILE
========================= */
const botaoMenu = document.getElementById("menu-mobile");
const navMenu = document.getElementById("nav-menu");

if (botaoMenu && navMenu) {
  botaoMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

/* =========================
   ANIMAÇÕES AO SCROLL (CORRIGIDO)
========================= */
const elementos = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // 🔥 evita bug ao rolar
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -80px 0px", // 👈 margem de segurança
    threshold: 0
  }
);

elementos.forEach(el => observer.observe(el));
