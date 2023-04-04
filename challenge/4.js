//4 - Crie uma função que receba como parâmetro um número e retorne true se ele for par e false se ele for ímpar.

function parOuImpar(number) {     //função "parOuImpar" com o parâmetro number e retorna true/par false/impar
    if (number % 2 === 0) {       //if verifica se o numero(parâmetro) é divisivel por 2, operador %  
        return true;              //retorna o verdadeiro 
    }
    else {                         //caso não divida por 2 o codigo  if (number % 2 === 0) sera falso (false)
        return false;              //retorna o false
    }
}

console.log( parOuImpar(2));        //coloquei 2/par (true)
console.log( parOuImpar(3));        //coloquei 3/impar (false)


