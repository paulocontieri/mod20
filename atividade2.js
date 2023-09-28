/*
Exercicio 02
Dado um array numérico qualquer sem valores repetidos, 
descubra qual é o índice do maior valor e o índice do menor valor.
*/

//Aqui eu fiz a criação do meu array com varios númeors, inclusive numeros quebrados
var numeros = ["885.7", "984.9", "444.1", "825", "1002"];

/*Eu utilizei uma função do proprio javascript que é a "Math.min" para descobrir o menor valor 
e a "Math.max" para descobrir o maior valor, porem eu tive que utilizar "..."
antes de passar o array como parametro, pois o "..." irá quebrar o array em números unicos, 
sem usar o array como um todo
*/
var menorValor = Math.min(...numeros);
var maiorValor = Math.max(...numeros);


console.log(`O maior valor do array é ${maiorValor} e o menor é ${menorValor}`);

