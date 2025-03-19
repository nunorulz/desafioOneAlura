let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    amigos.push(nome);

    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    novoItem.style.padding = '5px 0'; // Consistência com o design
    listaAmigos.appendChild(novoItem);
    input.value = '';
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione pelo menos 1 amigo para sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    itemResultado.style.padding = '5px 0'; // Consistência com o design
    resultado.appendChild(itemResultado);
}