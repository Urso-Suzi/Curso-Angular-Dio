

class Carro {
    marca;
    cor;
    gastoMedioDEGasolinaPorKm;

    constructor(marca, cor, gastoMedioDEGasolinaPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioDEGasolinaPorKm = gastoMedioDEGasolinaPorKm;
    }
   

    valorGastoEmGasolinaPorKm(quilometros, precoCombustivel) {
         const valor = (quilometros / this.gastoMedioDEGasolinaPorKm) * precoCombustivel
        
        return `Valor gasto em gasolina é: R$${valor.toFixed(2)}`
        
    }

}

const Opala = new Carro('Jeta', 'Preto', 12);

console.log(Opala);
console.log(Opala.valorGastoEmGasolinaPorKm(70, 5));

