// Função para encontrar a média de um vetor de números
function encontrarMedia(vetor) {
    if (vetor.length === 0) return 0;
    
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    
    return soma / vetor.length;
}

// Programa principal
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Pergunta ao usuário a quantidade de números
    rl.question('Quantos números você deseja informar? ', (quantidade) => {
        const numQuantidade = parseInt(quantidade);
        if (isNaN(numQuantidade) || numQuantidade <= 0) {
            console.log('Quantidade inválida. Deve ser um número positivo.');
            rl.close();
            return;
        }

        let numeros = [];
        let contador = 0;

        // Função para obter os números
        function obterNumero() {
            if (contador < numQuantidade) {
                rl.question(`Informe o número ${contador + 1}: `, (numero) => {
                    const num = parseFloat(numero);
                    if (!isNaN(num)) {
                        numeros.push(num);
                        contador++;
                        obterNumero();
                    } else {
                        console.log('Número inválido. Tente novamente.');
                        obterNumero();
                    }
                });
            } else {
                // Calcula a média e exibe o resultado
                const media = encontrarMedia(numeros);
                console.log(`A média dos números informados é: ${media}`);
                rl.close();
            }
        }

        obterNumero();
    });
}

// Executa o programa
main();
