const listaDeNotas = [];

listaDeNotas.push(5);
listaDeNotas.push(7);
listaDeNotas.push(8);
listaDeNotas.push(2);
listaDeNotas.push(5);
listaDeNotas.push(8);



let soma = 0

for (let i = 0; i < listaDeNotas.length; i++){
    const nota = listaDeNotas[i];
    soma = soma + nota;
}

const media = soma / listaDeNotas.length;
console.log(media);
