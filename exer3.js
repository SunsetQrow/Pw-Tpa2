// Solicita ao usuário que insira um número correspondente a um dia da semana
let numeroDia = parseInt(prompt("Digite um número correspondente a um dia da semana (1 para Domingo, 2 para Segunda-feira, etc.):"));

// Usa a estrutura switch para exibir o dia da semana correspondente
switch (numeroDia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. Por favor, insira um número entre 1 e 7.");
        break;
}
