
const precoGasolina = 5.79;
const precoEtanol = 6.66;
const kmPorLitros = 10;
const distanciaEMkm = 100;
const tipoCombustivel = 'Etanol'
const litrosConsumidos = distanciaEMkm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') 
{
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} 
else  
{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


