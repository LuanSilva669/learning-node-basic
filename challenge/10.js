//10 - Crie uma função que receba como parâmetro um número e retorne true se ele for primo e false se ele não for.

function isPrimo(numero) {
    // se o número for menor ou igual a 1, não é primo
    if (numero <= 1) {
      return false;
    }
  
    // verifica se o número é divisível por algum outro número além de 1 e ele próprio
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    //  o número é primo
    return true;
  }
  