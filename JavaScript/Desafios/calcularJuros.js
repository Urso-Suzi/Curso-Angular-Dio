//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Saiba mais sobre isNaN(): 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN

// Entrada dos valores com a função gets():
const capitalInicial = parseFloat(prompt());
const taxaJuros = parseFloat(prompt());
const periodoDeTempo = parseInt(prompt());

//!isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(periodoDeTempo) && periodoDeTempo > 0) {
//TODO: Calcule o montante usando a fórmula de juros simples e o montante final somando o juros simples ao capital inicial:
  const jurosSimples = (capitalInicial * taxaJuros * periodoDeTempo) / 100;
  const montanteFinal = capitalInicial + jurosSimples;


  let montanteFinal2casas = montanteFinal.toFixed(2);
  let capitalInicial2casas = capitalInicial.toFixed(2);
//TODO: Imprima o resultado com formatação, incluindo o período, o capital inicial, a taxa de juros e o montante final:
//Lembre-se: Até duas casas decimais para o Capital Inicial e o Montante Final.
  console.log(`Montante em ${periodoDeTempo} meses, com R$${capitalInicial2casas} iniciais, ${taxaJuros}% juros, e: R$ ${montanteFinal2casas}.`);
} else {
  console.log('Por favor, insira valores validos e um periodo de tempo adequado.');
}