//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Log to console
const contaBancaria = {
    nomeCliente: " ",
    saldo: 0,
  };
  
  contaBancaria.nomeCliente = prompt();
  contaBancaria.saldo = parseFloat(prompt());
  
  const numOperacoes = parseInt(prompt());
  
  // TODO: Crie um loop for para iterar sobre o número de operações especificado:
  for ( i = 0; i < numOperacoes; i++) {
    const tipoOperacao = prompt();
    const valorOperacao = parseFloat(prompt())
  
   // TODO: Verifique o tipo de operação (saque) e atualize o saldo da conta bancária:

        if (tipoOperacao.toLowerCase() === "depósito") {
            // Se for um depósito, adiciona o valor ao saldo.
            contaBancaria.saldo += valorOperacao;
            
        } else if (tipoOperacao.toLowerCase() === "saque") {
            // Se for um saque, subtrai o valor do saldo.
            contaBancaria.saldo -= valorOperacao;
            
        } else {
            console.log('Porfavor, digite: Saque ou Depósito')
            
        }
    }

  
  // Imprime o nome do cliente da conta bancária;
  console.log(`Nome do cliente: ${contaBancaria.nomeCliente}`);
  // Imprime o saldo final da conta bancária formatado como moeda brasileira (R$) com duas casas decimais.
  console.log(`Saldo final: R$ ${contaBancaria.saldo.toFixed(2)}`);