//generics


/*  
    A reticência (...) informa ao JS que iremos receber vários itens, ao invés de precisarmos especificar
    que uma determinada função, irá receber um número específico de parametros.
*/

function concatArray1(...itens: any[]):any[] {
   return new Array().concat(...itens); 
}


const numArray1 = concatArray1([1, 5], [3])
console.log(numArray1)

const stringArray1 = concatArray1(["Roberto", "Rivaldo"], ["Ronaldo"]);
console.log(stringArray1);

/*
 a situação acima simula uma criação de array generico, e isso é um problema pois pode receber
 dados de qualquer tipo
*/

function concatArray2<T>(...itens: T[]):T[] {
    return new Array().concat(...itens); 
 }
 
 
 const numArray2 = concatArray2<number[]>([1, 5], [3]);
 console.log(numArray2);

 const stringArray2 = concatArray2<string[]>(["Roberto", "Rivaldo"], ["Ronaldo"]);
 console.log(stringArray2);

 /*
        Já nesta função acima, especificamos com o T, que o parametro é especifico ao retorno
        num só receberá number
        string só receberá string
 */