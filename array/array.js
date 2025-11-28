// let frutas = ["uva", "abacaxi", "morango"];

// console.log(" a lista de frutas tem "  + frutas.length + " ïtens.");

// console.log("a primeira fruta e a: " + frutas [0]);

// console.log("ö item 4 da minha lista e: " + frutas [3]);

// console.log(frutas);

// for(let i = 0; i <= frutas.length; i++){
// console.log(frutas[i]);

// }

// crie uma lista de tarefas contendo no max 10 itens 
// e exiba cada tarefa


// Lista de tarefas
let tarefas = [
  "Estudar JavaScript",  
  "Fazer exercícios",
  "Arrumar o quarto",
  "Ler um livro",
  "Responder emails",
  "Treinar",
  "Revisar anotações",
  "Comprar mantimentos",
  "Descansar"
];

// Exibir cada tarefa usando while
let i = 0;

while (i < tarefas.length) {
  console.log(`Tarefa ${i + 1}: ${tarefas[i]}`);
  i++;
}
