// Função principal do jogo
function jogar() {
    // Definindo o número aleatório
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    // Função para verificar a tentativa do usuário
    function verificarTentativa() {
        // Solicitando ao usuário para inserir um número
        const tentativa = parseInt(prompt("Adivinhe o número de 1 a 10:"));

        // Verificando se a tentativa é igual ao número aleatório
        if (tentativa === numeroAleatorio) {
            alert("Parabéns! Você acertou o número.");
        } else {
            // Caso o usuário erre, ele deve continuar tentando
            alert("Número errado. Tente novamente.");
            verificarTentativa();
        }
    }

    // Iniciando o processo de verificação
    verificarTentativa();
}

// Iniciando o jogo
jogar();
