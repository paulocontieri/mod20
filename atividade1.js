/*Exercicio 01
Calcule o MDC (máximo divisor comum) entre dois números.
*/

//Aqui eu utilizei arrow function, aprendido em aula
const calcularMDC = (a, b) => {
  //dentro da minha função resolvi utilizar condicional também aprendido em aula
  if (b === 0) {
      return a;
  } else {
      const resto = a % b;
      return calcularMDC(b, resto);
  }
}

// Aqui o usuário irá colocar os valores de entrada de acordo com a necessidade
const numero1 = 36;
const numero2 = 48;

//Aqui eu executo a função, passando como parametro os valores passados pelo usuário
const mdc = calcularMDC(numero1, numero2);

//Aqui eu imprimo o resultado, utilizando `` aprendido em aula
console.log(`O MDC entre ${numero1} e ${numero2} é ${mdc}`);
