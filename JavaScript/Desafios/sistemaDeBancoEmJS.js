//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


// Objeto chamado contaBancaria com o nome do cliente e saldo inicial:
const contaBancaria = {
    nomeCliente: "João",
    saldo: 1000.0,
  };
  
  // Define-se uma função chamada realizarOperacao:
  function realizarOperacao() {
    // Obtém uma opção do usuário e converte para um número inteiro.
    const opcao = parseInt(prompt());
  
    // Criamos uma estrutura condicional switch para lidar com as diferentes operações com base na opção selecionada:
    switch (opcao) {
      // Caso a opção seja 1 (Depósito).
      case 1:
        // Obtém o valor do depósito do usuário.
        const valorDeposito = parseFloat(prompt());
        // Adiciona o valor do depósito ao saldo da conta.
        contaBancaria.saldo += valorDeposito;
        // Imprime a confirmação do depósito e o saldo atual formatado.
        console.log("Operação de depósito concluída.");
        console.log(`Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
        break;
  
      // Caso a opção seja 2 (Saque).
      case 2:
        // Obtém o valor do saque do usuário.
        const valorSaque = parseFloat(prompt());
        // TODO: Verifique se o saldo é suficiente para o saque:
        if ( valorSaque <= contaBancaria.saldo ) {
          // TODO: Subtraia o valor do saque do saldo da conta:
          contaBancaria.saldo -= valorSaque;
          console.log("Operação de saque concluída.");
         // TODO: Imprima a confirmação do saque e o saldo atual formatado:
          console.log(`Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
        } else {
          console.log("Saldo insuficiente. Operação de saque cancelada.");
        // TODO: Se o saldo for insuficiente, imprima uma mensagem de erro e o saldo atual:
          console.log(`Saldo: R$${contaBancaria.saldo}`);
        }
        break;
  
      // Caso a opção seja 3 (Verificar Saldo).
      case 3:
        // TODO: Imprima o saldo atual formatado:
        console.log(`Saldo: R$${contaBancaria.saldo}`);
        break;
  
      // Caso a opção seja 4 (Encerrar o programa).
      case 4:
        // Imprime uma mensagem de encerramento e retorna da função, encerrando o programa.
        console.log("Encerrando o programa.");
        return;
  
      // Se a opção não corresponder a nenhum dos casos anteriores.
      default:
        // Imprime uma mensagem de opção inválida.
        console.log("Opção inválida.");
    }
  }
  
  // Chama a função realizarOperacao para iniciar o programa.
  realizarOperacao();



  


  