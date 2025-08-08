let amigoLista = [];

function adicionarAmigo() {
    // 1. Captura o elemento de input e o seu valor
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim(); // .trim() remove espaços em branco no início e fim

    // 2. Verifica se o campo não está vazio
    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return; // Para a execução da função se o campo estiver vazio
    }

    // 4. Adiciona o novo nome ao array
    amigoLista.push(nomeAmigo);

    // 5. Atualiza a lista de nomes na página HTMl
    
    exibirAmigoLista();

    // 6. Limpa o campo de input para a próxima inserção
    amigoInput.value = '';
    amigoInput.focus(); // Coloca o foco de volta no campo de input
}

function exibirAmigoLista() {
    // 1. Captura o elemento <ul> onde os nomes serão exibidos
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpa a lista antes de recriá-la para não duplicar

    // 2. Percorre o array de amigos e cria um item de lista (<li>) para cada um
    for (let i = 0; i < amigoLista.length; i++) {
        // Cria um novo elemento <li>
        let itemLista = document.createElement('li');
         
        itemLista.textContent = amigoLista[i]; // Define o texto do item da lista

        // Adiciona o <li> recém-criado à <ul>
        listaHTML.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigoLista.length < 1) {
        return; // Para a função
    }

    // 1. Pega o total
    let totalDeAmigos = amigoLista.length;

    // 2. Gera o índice aleatório
    let indiceSorteado = Math.floor(Math.random() * totalDeAmigos);

    // 3. Pega o nome do amigo
    let amigoSorteado = amigoLista[indiceSorteado];

    // Exibe o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo sorteado foi: ${amigoSorteado}!</p>`;

    
}

