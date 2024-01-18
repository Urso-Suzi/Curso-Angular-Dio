//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const contaBancaria = {
    investimentoInicial: parseFloat(prompt()),
    taxaJurosMensal: parseFloat(prompt()),
    periodoMeses: parseInt(prompt()),
  };
  
  // TODO: Calcule a taxa de juros mensal em formato decimal (0 a 1) a partir da taxa percentual fornecida:
    
    let taxaJurosEmDecimal = contaBancaria.taxaJurosMensal / 100;
    let periodoMeses = contaBancaria.periodoMeses;
    let investimentoInicial = contaBancaria.investimentoInicial;
  // TODO: Calcule o montante (valor total após o investimento) usando a fórmula de juros compostos.


  let montante = investimentoInicial;

    for (mes = 0; mes < periodoMeses; mes ++) {
        let valor = taxaJurosEmDecimal * montante;
        montante += valor;
    }
  
  
  // É impresso informações sobre o investimento:
  console.log("Investimento: " + investimentoInicial.toFixed(2));
  console.log("Juros: " + contaBancaria.taxaJurosMensal);
  console.log("Período: " + periodoMeses);
  console.log("Resultado: " + montante.toFixed(2));