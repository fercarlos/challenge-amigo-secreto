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
