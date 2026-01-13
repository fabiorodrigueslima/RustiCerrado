// =========================
// CARRINHO GLOBAL
// =========================

// carrega carrinho do storage
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// atualiza número no header
function atualizarContador() {
  const contador = document.getElementById("cart-count");
  if (contador) {
    contador.textContent = carrinho.length;
  }
}

// salva e atualiza contador
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContador();
}

// adicionar produto
function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  salvarCarrinho();
}

// remover
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  renderizarCarrinho();
}

// renderiza lista (só no carrinho.html)
function renderizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  if (!lista) return;

  lista.innerHTML = "";

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>Carrinho vazio.</p>";
    return;
  }

  carrinho.forEach((item, index) => {
    lista.innerHTML += `
      <div class="card product-card">
        <h3>${item.nome}</h3>
        <button class="btn btn-light" onclick="removerDoCarrinho(${index})">
          Remover
        </button>
      </div>
    `;
  });
}

// 🔥 ISSO FAZ APARECER O NÚMERO AO ABRIR QUALQUER PÁGINA
document.addEventListener("DOMContentLoaded", atualizarContador);
