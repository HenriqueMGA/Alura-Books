/*metodo filter*/
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros () {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
  exibirOsLivrosNaTela(livrosFiltrados)
  if (categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDosLivros(livrosFiltrados)
    exibirValorTotalDeLivrosNaTela(valorTotal)
  }
}

function exibirValorTotalDeLivrosNaTela(valorTotal) {
  elementoValorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
}

function calcularValorTotalDosLivros(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}