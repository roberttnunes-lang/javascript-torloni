// Exercício 7: Cálculo de desconto progressivo

// Solicita o valor total da compra
let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));

// Variável para guardar o valor final com desconto
let valorFinal;

// Verifica a faixa de desconto
if (valorCompra <= 100) {
    valorFinal = valorCompra; // sem desconto
} else if (valorCompra <= 200) {
    valorFinal = valorCompra * 0.90; // 10% de desconto
} else {
    valorFinal = valorCompra * 0.80; // 20% de desconto
}

// Exibe o valor final
alert("Valor final da compra com desconto: R$ " + valorFinal.toFixed(2));
