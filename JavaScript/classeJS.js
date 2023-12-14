class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idae é ${this.idade}`);
    }
}

function compararPessoa(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p1.idade < p2.idade) {
        `${p2.nome} é mais velho(a) que ${p2.idade}`
    } else {console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)}

}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 21);

compararPessoa(vitor, renan);


