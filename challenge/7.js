// 7 - Crie um programa que solicite ao usuário que digite uma palavra e exiba no console quantas letras ela possui.

const readline = require('readline');   // biblioteca readline. 
const rl = readline.createInterface({    //Essa linha cria uma interface de leitura (rl) para ler o input 
  input: process.stdin,                     
  output: process.stdout
});

rl.question('Digite uma palavra: ', (palavra) => {
  const tamanho = palavra.length;
  console.log(`A palavra "${palavra}" tem ${tamanho} letras.`);
  rl.close();
});                     //pergunta para o usuario (primeiro parametro), o segundo é o "callback" quando digitar a resposta, 


 // Nível de difículdade: inferno