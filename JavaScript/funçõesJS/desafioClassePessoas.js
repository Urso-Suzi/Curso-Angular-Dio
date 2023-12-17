 class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        const imc = this.peso / (Math.pow(this.altura, 2));
        return imc.toFixed(1);
    }

    classificarImc() {
        const imc = this.calcularImc();
        
        if (imc < 18.5) {return 'Abaixo do peso';}
        else if (imc >= 18.5 && imc < 25 ) {return 'Peso normal';}
        else if (imc >= 25 && imc < 30) {return 'Acima do Peso';}
        else if (imc >= 30 && imc < 40) {return 'Obeso';}
        else {return 'Obesidade Grave';}
    }

    informarImc() {
        const imc = this.calcularImc();
        return `Seu imc é: ${imc}`
    }
 }

const p1 = new Pessoa('Roberto', 63, 1.75);
console.log(p1.informarImc());
console.log(p1.classificarImc())
const jesebel = new Pessoa('Jesebel', 70, 1.75);
console.log(jesebel.informarImc());
console.log(jesebel.classificarImc())



