/*
Exercicio 03
Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, 
ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. 
Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.
*/

//Criei minha função utilizando arrow function
const somaMultiplos = () => {

  //"Estartei" a variavel soma com o valor de 0, utilizando let
  let soma = 0;

  /*
  Decidi utilizar um laço de repetição para poder percorrer por todos os numeros
  de 1 até 1000 individualmente.
  */
  for (let i = 1; i < 1000; i++) {

    /*
    Criei uma condicional para saber se o resto da divisão do numero atual do meu laço de repetição
    for igual a 0 de 5 ou 7, então ele irá pegar o valor que está em soma, e somará com o valor atual
    */
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i;
    }
  }

  // no fim ele me retorna o valor de soma
  return soma;
}
//Executei a função e imprimi o resultado
const resultado = somaMultiplos();
console.log(resultado);
