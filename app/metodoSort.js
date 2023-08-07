const botaoOrdenar = document.getElementById('btnOrdenarPorPreco');

botaoOrdenar.addEventListener('click', ordenaPorPreco);

function ordenaPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    mostrarLivros(livrosOrdenados);
}