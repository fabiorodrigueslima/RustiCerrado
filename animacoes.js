// =============================
// ANIMAÇÕES AO SCROLL
// =============================
const elementos = document.querySelectorAll(
  ".animate, .fade-left, .fade-right, .zoom"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));
