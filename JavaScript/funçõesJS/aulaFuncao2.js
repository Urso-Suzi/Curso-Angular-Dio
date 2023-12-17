function EscreveMeuNome(nome) {
    return 'Meu nome é: ' + nome;
}


function EMaioDeIdade(idade) {
    if (idade >= 18){console.log(EscreveMeuNome('Pedro') + ' e eu sou maior de idade! Pois tenho: ' + idade + ' anos.')}
    else {console.log('É menor de idade!')};
}

let idade = 18;

EMaioDeIdade(idade);

