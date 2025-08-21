// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nomeAmigo = document.getElementById('amigo').value;

    // Valida a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualiza a lista exibida
    exibirListaAmigos();
}

// Função para exibir a lista de amigos
function exibirListaAmigos() {
    // Obtém o elemento da lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista existente
    listaAmigos.innerHTML = '';

    // Percorre o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento <li> para cada amigo
        const li = document.createElement('li');
        li.textContent = amigos[i];

        // Adiciona o <li> à lista
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Por favor, adicione ao menos um amigo para sortear.');
        return;
    }

    // Gera um índice aleatório entre 0 e o tamanho do array - 1
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Atualiza o conteúdo da lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo secreto sorteado: ${amigoSorteado}`;
}
