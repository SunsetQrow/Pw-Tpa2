// Função para ler um número inteiro do usuário
function lerNumero() {
    let input = prompt("Digite um número inteiro (ou 0 para parar):");
    return parseInt(input, 10);
}

// Função principal
function calcularSoma() {
    let soma = 0;
    let numero;

    do {
        numero = lerNumero();
        if (numero !== 0) {
            soma += numero;
        }
    } while (numero !== 0);

    alert("A soma de todos os números inseridos é: " + soma);
}

// Iniciar o programa
calcularSoma();
