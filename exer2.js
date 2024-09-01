// Solicita a idade do usuário
var idade = parseInt(prompt("Digite sua idade:"));

// Verifica se a idade é válida e exibe a mensagem correspondente
if (idade >= 0 && idade <= 12) {
    alert("Você é uma criança.");
} else if (idade >= 13 && idade <= 17) {
    alert("Você é um adolescente.");
} else if (idade >= 18 && idade <= 64) {
    alert("Você é um adulto.");
} else {
    alert("Você é um idoso.");
}
