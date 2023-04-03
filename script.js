let preçoPrato = 0;
let preçoBebida = 0;
let preçoSobremesa = 0;

let nomePrato = '';
let nomeBebida = '';
let nomeSobremesa = '';

function verificarPedido(){
    if (preçoPrato!=0 && preçoBebida!=0 && preçoSobremesa!=0) {
        const button = document.querySelector('.fecharPedido');
        button.removeAttribute('disabled');
        button.classList.add('botãoHabilitado');
        button.innerHTML = 'Fechar pedido';
    }
}

function selecionarPrato(seleção){
    const preSeleção = document.querySelector('.opçãoprato.selecionado');
    if (preSeleção !== null) {
        preSeleção.classList.remove('selecionado');
    }
    seleção.classList.add('selecionado');
    let preçoParcial = seleção.querySelector('preço').innerHTML;
        preçoParcial = preçoParcial.replace('R$','').replace(',','.');
        preçoPrato = parseFloat(preçoParcial).toFixed(2);
    nomePrato = seleção.querySelector('prato').innerHTML;
    verificarPedido();
}

function selecionarBebida(seleção){
    const preSeleção = document.querySelector('.opçãobebida.selecionado');
    if (preSeleção !== null) {
        preSeleção.classList.remove('selecionado');
    }
    seleção.classList.add('selecionado');
    let preçoParcial = seleção.querySelector('preço').innerHTML;
        preçoParcial = preçoParcial.replace('R$','').replace(',','.');
        preçoPrato = parseFloat(preçoParcial).toFixed(2);
    nomePrato = seleção.querySelector('prato').innerHTML;
    verificarPedido();
}


function selecionarSobremesa(seleção){
    const preSeleção = document.querySelector('.opçãosobremesa.selecionado');
    if (preSeleção !== null) {
        preSeleção.classList.remove('selecionado');
    }
    seleção.classList.add('selecionado');
    let preçoParcial = seleção.querySelector('preço').innerHTML;
        preçoParcial = preçoParcial.replace('R$','').replace(',','.');
        preçoPrato = parseFloat(preçoParcial).toFixed(2);
    nomePrato = seleção.querySelector('prato').innerHTML;
    verificarPedido();
}

function confirmarPedido(){
    const verificaPrato = document.querySelector('.confirmaPrato');
    const verificaBebida = document.querySelector('.confirmaBebida');
    const verificaSobremesa = document.querySelector('.confirmaSobremesa');
    const total = document.querySelector('.confirmaTotal');

    verificaPrato.querySelector('prato').innerHTML = nomePrato;
    verificaBebida.querySelector('prato').innerHTML = nomeBebida;
    verificaSobremesa.querySelector('prato').innerHTML = nomeSobremesa;

    verificaPrato.querySelector('preço').innerHTML = preçoPrato.replace('.',',');
    verificaBebida.querySelector('preço').innerHTML = preçoBebida.replace('.',',');
    verificaSobremesa.querySelector('preço').innerHTML = preçoSobremesa.replace('.',',');

    let valorTotal = parseFloat(preçoPrato) + parseFloat(preçoBebida) + parseFloat(preçoSobremesa);
    valorTotal = valorTotal.toFixed(2).replace('.',',');
    total.querySelector('preço').innerHTML = `R$ ${valorTotal}`;

    const cofirmaçãoFinal = document.querySelector('.confirmaPedido');
    console.log(confirmaçãoFinal);
    confirmaçãoFinal.classList.remove('hidden')
}

function finalizarPedido() {
    const nome = prompt('Nome');
    const endereço = prompt('Endereço');
    let valorTotal = parseFloat(preçoPrato) + parseFloat(preçoBebida) + parseFloat(preçoSobremesa);
    valorTotal = valorTotal.toFixed(2).replace('.',',');
    const mensagem = 
        `Olá, gostaria de fazer o pedido:%0A` +
        `- Prato: ${nomePrato}%0A` +
        `- Bebida: ${nomeBebida}%0A` +
        `- Sobremesa: ${nomeSobremesa}%0A` +
        `Total: R$ ${valorTotal}%0A%0A` +
        `Nome: ${nome}%0A` +
        `Endereço: ${endereço}`;
    window.open(`https://wa.me/+5511900000000?text=${mensagem}`);
}