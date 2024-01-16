//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const contaBancaria = {
    investimentoInicial: parseFloat(prompt()),
    taxaJurosMensal: parseFloat(prompt()),
    periodoMeses: parseInt(prompt()),
  };
  
  // TODO: Calcule a taxa de juros mensal em formato decimal (0 a 1) a partir da taxa percentual fornecida:
  //preciso calcular o valor do juros aumentado, + o valor que será acrecido a cada mês
  // TODO: Calcule o montante (valor total após o investimento) usando a fórmula de juros compostos.
  
  
  // É impresso informações sobre o investimento:
  print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
  print("Juros: " + contaBancaria.taxaJurosMensal);
  print("Período: " + contaBancaria.periodoMeses);
  print("Resultado: " + montante.toFixed(2));