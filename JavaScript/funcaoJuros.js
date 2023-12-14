function AplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function AplicarJuross(valor, juros){
    return valor + (valor * (juros / 100));
}

const precoEtiqueta = 100;
const formaDePagamento = 2;


if (formaDePagamento === 1) {
    console.log("Você precisa pagar: R$" + AplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log("Você precisa pagar: R$" + AplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log("Você precisa pagar: R$" + precoEtiqueta);
} else {
    console.log("Você precisa pagar: R$" + AplicarJuross(precoEtiqueta, 10));
}