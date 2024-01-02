"use strict";
// tipos primitivos: boolean, number, string
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ligado = false;
let nome = "Felipe";
let idade = 30;
let altura = 1.90; // number permite números flutuantes
// tipos especiais
//null
//undefined
let nulo; // só pode receber null.
let indefinido; // só pode aceitar undefined.
// Tipos abrangentes: Any e Void
let retorno; // vazio
let retornoView = false; //retorna qualquer coisa, quando temos um dado imprevisivel. 
//objeto - sem previsibilidade
let produto = {
    name: "Pedro",
    cidade: "RE",
    idade: 30,
};
let meuProduto = {
    nome: "Escoba de Dentes",
    preco: 1.99,
    unidades: 1,
};
/**
 * arrays
 */
let dados = ["felipe", "ana", "adriana"];
let dados2 = ["felipe", "ana", "adriana"];
// Array de multiTipos
// com muito cuidado para não quebrar, podemos receber dois tipos em um único array.
let infos = ["felipe", 3];
//tuplas = são vetores de multitipos, que tem seu lugares definidos
let boleto = ["agua conta", 199.90, 23124145647]; // é necessário seguir a ordem específica das informações.
//Array métodos tem os mesmos do JS
dados.pop();
// Datas 
let aniversario = new Date("2022-12-01 05:00");
//console.log(aniversario.toString());
// Funções
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
//console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
;
//console.log(addToHello("Roberto"));
function CallToPhone(phone) {
    return phone;
}
// console.log(CallToPhone(12313245645))
// console.log(CallToPhone("Pedro"))
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
const bot1 = {
    id: 1,
    name: "Megaman"
};
const bot2 = {
    id: 1,
    name: "Megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello my name is ${this.name}`;
    }
}
const p = new Pessoa(224, "Pedro");
console.log(p.sayHello());
// type heroi = {
//     name: string;
//     vulgo: string;
// };
// function printaObjetos(pessoa: heroi) {
//     console.log(pessoa);
// }
// printaObjetos({
//     name: "Pedro",
//     vulgo: "Jefferson",
// });
// console.log("Olá mundo");
