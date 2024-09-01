// Função para filtrar números maiores que 7 e armazenar em um novo vetor
function filtrarNumeros(vetor) {
    // Filtra os números maiores que 7
    let numerosFiltrados = vetor.filter(numero => numero > 7);
    
    // Converte o vetor filtrado para uma string
    let numerosFiltradosString = numerosFiltrados.join(', ');
    
    // Exibe os números filtrados em um prompt
    prompt("Números maiores que 7:", numerosFiltradosString);
    
    // Retorna o vetor filtrado
    return numerosFiltrados;
}

// Exemplo de uso
let vetor = [3, 8, 10, 2, 9, 4, 12];
let novoVetor = filtrarNumeros(vetor);

// Exibe o novo vetor no console
console.log("Novo vetor com números maiores que 7:", novoVetor);
