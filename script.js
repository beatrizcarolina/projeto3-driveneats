/*let preçoPrato = 0;
let preçoBebida = 0;
let preçoSobremesa = 0;
let total = 0;

let nomePrato = '';
let nomeBebida = '';
let nomeSobremesa = '';*/

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

function finalizarPedido() {
    nomePrato = document.querySelector(".opçãoprato.selecionado").getElementsByClassName("nome")[0].innerText;
    preçoPrato = document.querySelector(".opçãoprato.selecionado").getElementsByClassName("preço")[0].innerText;
    preçoPrato = preçoPrato.substring(2);
    preçoPrato = preçoPrato.replace(",", ".");
    console.log(nomePrato);
    console.log(preçoPrato);
    
    nomeBebida = document.querySelector(".opçãobebida.selecionado").getElementsByClassName("nome")[0].innerText;
    preçoBebida = document.querySelector(".opçãobebida.selecionado").getElementsByClassName("preço")[0].innerText;
    preçoBebida = preçoBebida.substring(2);
    preçoBebida = preçoBebida.replace(",", ".");
    console.log(nomeBebida);
    console.log(preçoBebida);
    
    nomeSobremesa = document.querySelector(".opçãosobremesa.selecionado").getElementsByClassName("nome")[0].innerText;
    preçoSobremesa = document.querySelector(".opçãosobremesa.selecionado").getElementsByClassName("preço")[0].innerText;
    preçoSobremesa = preçoSobremesa.substring(2);
    preçoSobremesa = preçoSobremesa.replace(",", ".");
    console.log(nomeSobremesa);
    console.log(preçoSobremesa);

    total = Number(preçoPrato) + Number(preçoBebida) + Number(preçoSobremesa);
    total = total.toFixed(2);
    total = `${total}`;
    total = total.replace(".", ",");
    total = "R$" + total;
    console.log(total);

    let wpp =
    "https://wa.me/+5511998765432?text=" +
    encodeURIComponent(
    `Olá, gostaria de fazer o pedido:- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: ${total}\n`
    );
    console.log(wpp);
    window.open(wpp);
  }