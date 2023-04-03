let preçoPrato = 0;
let preçoBebida = 0;
let preçoSobremesa = 0;
let total = 0;

let nomePrato = '';
let nomeBebida = '';
let nomeSobremesa = '';

function verificarPedido(){
    const pratoselecionado = document.querySelector(".opçãoprato.selecionado");
    const bebidaselecionada = document.querySelector(".opçãobebida.selecionado");
    const sobremesaselecionada = document.querySelector(".opçãosobremesa.selecionado");

    if (pratoselecionado !== null && bebidaselecionada !== null && sobremesaselecionada !== null) {
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

    verificarPedido();
}

function selecionarBebida(seleção){
    const preSeleção = document.querySelector('.opçãobebida.selecionado');
    if (preSeleção !== null) {
        preSeleção.classList.remove('selecionado');
    }
    seleção.classList.add('selecionado');
    
    verificarPedido();
}

function selecionarSobremesa(seleção){
    const preSeleção = document.querySelector('.opçãosobremesa.selecionado');
    if (preSeleção !== null) {
        preSeleção.classList.remove('selecionado');
    }
    seleção.classList.add('selecionado');
    
    verificarPedido();
}

/*function confirmarPedido(){
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
    let valorTotal = parseFloat(preçoPrato) + parseFloat(preçoBebida) + parseFloat(preçoSobremesa);
    valorTotal = valorTotal.toFixed(2).replace('.',',');
    const mensagem = 
        `Olá, gostaria de fazer o pedido:%0A` +
        `- Prato: ${nomePrato}%0A` +
        `- Bebida: ${nomeBebida}%0A` +
        `- Sobremesa: ${nomeSobremesa}%0A` +
        `Total: R$ ${valorTotal}%0A%0A` +
    window.open(`https://wa.me/+5511900000000?text=${mensagem}`);
}*/

function finalizarPedido() {
    nomePrato = document.querySelector(".opçãoprato .selecionado .prato").innerText;
    preçoPrato = document.querySelector(".opçãoprato .selecionado .preço").innerText;
    preçoPrato = preçoPrato.substring(2);
    preçoPrato = preçoPrato.replace(",", ".");
    console.log(preçoPrato);
  
    nomeBebida = document.querySelector(".opçãobebida.selecionado.bebida").innerText;
    preçoBebida = document.querySelector(".opçãobebida.selecionado.preço").innerText;
    preçoBebida = preçoBebida.substring(2);
    preçoBebida = preçoBebida.replace(",", ".");
    console.log(preçoBebida);
  
    nomeSobremesa = document.querySelector(".opçãosobremesa.selecionado.sobremesa").innerText;
    preçoSobremesa = document.querySelector(".opçãosobremesa.selecionado.preço").innerText;
    preçoSobremesa = preçoSobremesa.substring(2);
    preçoSobremesa = preçoSobremesa.replace(",", ".");
    console.log(preçoSobremesa);
  
    total = parseFloat(preçoPrato) + parseFloat(preçoBebida) + parseFloat(preçoSobremesa);
    total = total.toFixed(2);
    total = `${total}`;
    total = total.replace(".", ",");
    total = "R$" + total;
    console.log(total);
  
    let wpp =
      "https://wa.me/32985039406?text=" +
      encodeURIComponent(
        `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa : ${nomeSobremesa}\nTotal: ${total}\n`
      );
    console.log(wpp);
    window.open(wpp);
  }