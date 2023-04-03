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

function selecionarPrato(selecionado){
    const preSeleção = document.querySelector('.pratoSelecionado');
    if (preSeleção !== null) {
        preSeleção.classList.remove('selecionado');
    }
    selecionado.classList.add('selecionado');
    let preçoParcial = selecionado.querySelector('preço').innerHTML;
        preçoParcial = preçoParcial.replace('R$','').replace(',','.');
        preçoPrato = parseFloat(preçoParcial).toFixed(2);
    nomePrato = selecionado.querySelector('prato').innerHTML;
    verificarPedido();
}


function selecionarBebida(selecionado){
    const preSeleção = document.querySelector('.bebidaSelecionada');  
    if (preSeleção !== null){
        preSeleção.classList.remove('selecionado');
    }
    selecionado.classList.add('selecionado');
    let preçoParcial = selecionado.querySelector('preço').innerHTML;
        preçoParcial = preçoParcial.replace('R$','').replace(',','.');
        preçoBebida = parseFloat(preçoParcial).toFixed(2);
    nomeBebida = selecionado.querySelector('prato').innerHTML;
    verificarPedido();
}


function selecionarSobremesa(selecionado){    
    const preSeleção = document.querySelector('.sobremesaSelecionada');
    if (preSeleção !== null){
        preSeleção.classList.remove('selecionado');
    }
    selecionado.classList.add('selecionado');
    let preçoParcial = selecionado.querySelector('preço').innerHTML;
        preçoParcial = preçoParcial.replace('R$','').replace(',','.');
        preçoPrato = parseFloat(preçoParcial).toFixed(2);
    nomeSobremesa = selecionado.querySelector('prato').innerHTML;
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