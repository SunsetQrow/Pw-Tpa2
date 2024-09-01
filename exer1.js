// Solicita ao usuário para digitar um número
let numero = prompt("Digite um número:");

// Converte a entrada para um número
numero = Number(numero);

// Verifica se o número é positivo, negativo ou neutro
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é neutro.");
}
