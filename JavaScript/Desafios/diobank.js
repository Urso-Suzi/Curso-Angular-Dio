//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//TODO: Crie um objeto chamado contaBancaria para armazenar informações da conta.
let contaBancaria = {

    // Obtém o nome do cliente da conta:
    cliente: prompt(),
    
    
    //TODO: Agora crie as demais propriedades numeroConta e saldoInicial:
    numeroConta: prompt(),
    saldo: prompt(),
   
  };

  function mudarSaldo (saldo) {
    return Number(saldo).toFixed(2)
  }

  
  // Impressão das informações: Nome, Número da Conta e Saldo:
console.log(`Nome do cliente: ` + contaBancaria.cliente);
console.log(`Número da conta: ` + contaBancaria.numeroConta);
console.log(`Saldo: R$ `+ mudarSaldo(contaBancaria.saldo));
