// Função principal
function main() {
    const palavras = [];
    let continuar = true;
  
    // Loop para inserir palavras
    while (continuar) {
      let palavra = prompt("Digite uma palavra (ou 'sair' para terminar):");
      
      if (palavra.toLowerCase() === 'sair') {
        continuar = false;
      } else {
        palavras.push(palavra);
      }
    }
  
    // Pedir ao usuário uma palavra para contar
    const palavraEscolhida = prompt("Digite a palavra que você quer contar:");
    
    // Contar quantas vezes a palavra aparece
    const contagem = palavras.reduce((acc, palavra) => {
      if (palavra === palavraEscolhida) {
        acc++;
      }
      return acc;
    }, 0);
  
    // Exibir o resultado
    alert(`A palavra "${palavraEscolhida}" apareceu ${contagem} vezes.`);
  }
  
  // Executar a função principal
  main();
  