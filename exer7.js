// Função para solicitar a entrada do usuário
function pedirNumero(mensagem) {
    let numero;
    while (true) {
        numero = parseInt(prompt(mensagem), 10);
        if (!isNaN(numero)) {
            return numero;
        }
        alert("Por favor, insira um número inteiro válido.");
    }
}

// Função principal
function main() {
    let numeros = [];
    
    // Pedir 5 números para o usuário
    for (let i = 0; i < 5; i++) {
        let num = pedirNumero(`Digite o ${i + 1}º número inteiro:`);
        numeros.push(num);
    }
    
    // Encontrar o menor e o maior número
    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    
    // Mostrar o resultado
    alert(`O menor número é ${menor}.`);
    alert(`O maior número é ${maior}.`);
}

// Executar a função principal
main();
