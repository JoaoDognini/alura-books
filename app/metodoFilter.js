const botoes = document.querySelectorAll('.btn');
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis');
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const botaoClicado = document.getElementById(this.id);
    const categoria = botaoClicado.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    mostrarLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calculaValorTotal(livrosFiltrados);
        valorTotalLivros(valorTotal);
    } else elementoValorTotal.innerHTML = '';
}

function valorTotalLivros(valorTotal) {
    elementoValorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}