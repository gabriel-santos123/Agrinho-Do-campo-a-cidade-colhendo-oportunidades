// Array de curiosidades sobre pinhão
const curiosidadesPinhao = [
    "O pinhão é o fruto da araucária, uma árvore nativa da Mata Atlântica.",
    "O pinhão é rico em nutrientes como proteínas, gorduras boas e minerais.",
    "O pinhão é consumido principalmente cozido, mas também pode ser usado em diversas receitas.",
    "A árvore da araucária pode viver mais de 1000 anos e produzir pinhões ao longo de sua vida.",
    "O pinhão é considerado um alimento típico de festas juninas no Brasil.",
    "O pinhão é conhecido por seu sabor único e característico.",
    "O pinhão é colhido diretamente das pinhas das araucárias.",
    "No sul do Brasil, a colheita de pinhão é uma tradição familiar.",
    "O pinhão é uma fonte de alimento importante para a fauna nativa das regiões onde a araucária é encontrada.",
    "O pinhão é um alimento versátil que pode ser usado em pratos doces e salgados."
];

// Função para exibir uma curiosidade aleatória sobre pinhão
function exibirCuriosidadePinhao() {
    // Escolhe uma curiosidade aleatória do array
    const randomIndex = Math.floor(Math.random() * curiosidadesPinhao.length);
    const curiosidade = curiosidadesPinhao[randomIndex];
    
    // Exibe a curiosidade na página
    const curiosidadeElement = document.getElementById('curiosidadePinhao');
    if (curiosidadeElement) {
        curiosidadeElement.textContent = curiosidade;
    }
}

// Chamada inicial para exibir uma curiosidade ao carregar a página
exibirCuriosidadePinhao();
