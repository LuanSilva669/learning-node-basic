// 5 - Crie um programa que solicite ao usuário que digite um número e exiba no console a tabuada desse número, de 1 a 10.

const readline = require('readline'); // biblioteca readline. 

const rl = readline.createInterface({ //  método createInterface(), que recebe dois objetos como argumentos: input e output.  
  input: process.stdin,   //process.stdin é definido como entrada (input)
  output: process.stdout  //process.stdout é definido como saída (output).
});

rl.question("Digite um número: ", function(numero) {   //rl.question() usada para exibir a mensagem digite um numero: no console e esperar pela digitação.
  for(let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  rl.close();   // a função rl.close() é chamada para fazer funcionar.
});


//Quando o usuário digita um número e pressiona "Enter", a função de retorno de chamada é executada, exibindo a tabuada para o número digitado pelo usuário

 // Nível de difículdade: 6/10. Alguns concêitos totalmente novos, tive que recorrer à ajuda interna.

 
  
/* 
const linha de leitura =requer('linha de leitura').createInterface({ 
    entrada: processo.stdin,
    saída: processo.stdout
  });
  
  linha de leitura.questão('Quem é Você?',nome= >{   
    console.log(`Olá $ {nome}!`);
    linha de leitura.perto();
  });*/
