//8 - Crie uma função que receba um array de números e retorne o maior número desse array.


function encontrarMaiorNumero(numeros) {
    let maior = numeros[0]; // define o primeiro número como o maior
    
    for (let i = 1; i < numeros.length; i++) { // percorre o array a partir do segundo número
      if (numeros[i] > maior) { // se o número atual for maior que o maior atual, atualize o valor de "maior"
        maior = numeros[i];
      }
    }
    
    return maior; // retorna o maior número encontrado
  }
  const numeros = [10, 3, 7, 15, 2]; // array com numeros 
const maiorNumero = encontrarMaiorNumero(numeros); //função que vai encontrar o maior numero
console.log(`O maior número é ${maiorNumero}.`); // exibe no console o maior numero do array

// nivel de dificuldade: 7/10. A parte de fazer o codigo que define o maior do array me deixou um pouco perdido.

  