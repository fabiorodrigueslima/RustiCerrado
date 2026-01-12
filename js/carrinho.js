// Recupera carrinho do localStorage ou cria vazio
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adicionar produto ao carrinho
function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id == id);

  carrinho.push(produto);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Produto adicionado ao carrinho!");
}

// Remover produto
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  location.reload();
}

// Finalizar pedido no WhatsApp
function finalizarPedido() {
  let mensagem = "Olá! Gostaria de finalizar o pedido com os seguintes produtos:%0A";

  carrinho.forEach(item => {
    mensagem += `- ${item.nome}%0A`;
  });

  window.open(
    `https://wa.me/5561999952341?text=${mensagem}`,
    "_blank"
  );
}
