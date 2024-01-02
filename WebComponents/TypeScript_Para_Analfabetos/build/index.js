"use strict";
// tipos primitivos: boolean, number, string
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
console.log(CallToPhone(111232123132132));
console.log(CallToPhone("Pedro"));
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
