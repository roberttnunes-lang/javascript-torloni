// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numero = Number(prompt("Digite um número (0 para parar):"));

while (numero !== 0) {
  numero = Number(prompt("Número diferente de 0! Digite novamente:"));
}

console.log("Programa encerrado. Você digitou 0!");
