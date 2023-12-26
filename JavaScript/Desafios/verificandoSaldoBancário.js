//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Dados iniciais fixos, saldo da conta e nome do titular:
let saldoConta = 2000.0; 
const nomeTitular = "Mariane"; 

// Função para verificar o saldo:
function verificarSaldo() {
  console.log(`Saldo da conta de ${nomeTitular}: R$${saldoConta.toFixed(2)}`);
}

// Função para realizar um depósito:
function realizarDeposito(valor) {
  saldoConta += valor;
  console.log(`Deposito de R$${valor.toFixed(2)} realizado com sucesso. Saldo total: R$${saldoConta.toFixed(2)}`);
}

// TODO: Crie uma função 'realizarSaque' para realizar o saque e ao lado o parâmetro da função (valor): 
function realizarSaque(valor) {
    if (valor > saldoConta) {
      console.log("Saldo insuficiente para realizar o saque.");
    } else {
      saldoConta -= valor;
    //TODO: Retorne o valor de saque e o saldo da conta, respeitando as duas casas decimais:
      console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo total: R$${saldoConta.toFixed(2)}`)
    }
}
//TODO: Crie a condição para verifica se o 'valor' de saque é maior que o 'saldoConta':

const opcao = parseInt(prompt());

//TODO: Determine corretamente a estrutura condicional para escolher a ação com base na opção selecionada:
if (opcao === 1) {
  verificarSaldo();
} else if (opcao === 2) {
  const valorDeposito = parseFloat(prompt());
  realizarDeposito(valorDeposito);
} else if (opcao === 3) {
  const valorSaque = parseFloat(prompt());
  realizarSaque(valorSaque);
} else {
  console.log("Opcao invalida. Tente novamente.");
}