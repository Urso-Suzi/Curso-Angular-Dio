// tipos primitivos: boolean, number, string

let ligado:boolean = false;
let nome: string = "Felipe";
let idade: number = 30;
let altura: number = 1.90; // number permite números flutuantes

// tipos especiais
//null
//undefined
let nulo: null; // só pode receber null.
let indefinido: undefined; // só pode aceitar undefined.


// Tipos abrangentes: Any e Void

let retorno: void; // vazio
let retornoView: any = false; //retorna qualquer coisa, quando temos um dado imprevisivel. 

//objeto - sem previsibilidade
let produto: object = {
    name: "Pedro",
    cidade: "RE",
    idade: 30,
};

//objeto - tipado (com previsibilidade).

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Escoba de Dentes",
    preco: 1.99,
    unidades: 1,
};


/**
 * arrays
 */

let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

// Array de multiTipos
// com muito cuidado para não quebrar, podemos receber dois tipos em um único array.
let infos: (string | number)[] = ["felipe", 3];

//tuplas = são vetores de multitipos, que tem seu lugares definidos

let boleto: [string, number, number] = ["agua conta", 199.90, 23124145647]; // é necessário seguir a ordem específica das informações.

//Array métodos tem os mesmos do JS

dados.pop();

// Datas 

let aniversario: Date = new Date("2022-12-01 05:00");
//console.log(aniversario.toString());

// Funções

function addNumber(x:number, y:number): number {
    return x + y
}

let soma: number = addNumber(4, 7);

//console.log(soma);

function addToHello(name: string){
    return `Hello ${name}`;
};

//console.log(addToHello("Roberto"));

function CallToPhone(phone: number | string) : number | string{
    return phone;
}

console.log(CallToPhone(12313245645))
console.log(CallToPhone("Pedro"))

async function getDatabase(id: number): Promise<string> {
    return "felipe";
}























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