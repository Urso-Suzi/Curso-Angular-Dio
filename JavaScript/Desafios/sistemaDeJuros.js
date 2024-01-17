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

  let montante = 0;

    for (mes = 0; mes < periodoMeses; mes ++) {
        
        juros = (investimentoInicial * taxaJurosEmDecimal) 
        conta = investimentoInicial + juros * mes
        montante += conta;
        console.log(montante)

    }
  
  
  // É impresso informações sobre o investimento:
//   print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
//   print("Juros: " + contaBancaria.taxaJurosMensal);
//   print("Período: " + contaBancaria.periodoMeses);
//   print("Resultado: " + montante.toFixed(2));