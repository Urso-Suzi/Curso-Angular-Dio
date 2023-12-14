const pessoa = {
    nome:  "Vitor",
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}


const atributo = 'idade';

console.log(pessoa[atributo]);


pessoa.descrever();