
const numeros = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const ePar = numeros[i] % 2;
    if (ePar === 1) {
        console.log(numeros[i]);
    }
}