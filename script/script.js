// Captura dos elementos do DOM
let numeroInput = document.querySelector("#numero"); 
let baseAtual = document.querySelector("#base"); 
let baseConversao = document.querySelector("#conversao"); 
const btnConverter = document.querySelector("#converter");
const resultadoElemento = document.querySelector("#resultado");


function converteParaBaseDesejada(baseOrigem, baseDesejada, numeroInp){
    let numeroConvertido = parseInt(numeroInp, baseOrigem).toString(baseDesejada);
    return numeroConvertido;
}

btnConverter.addEventListener('click', () =>{

    let numeroInp = numeroInput.value.trim();
    let baseOrigem = Number(baseAtual.value);
    let baseDestino = Number(baseConversao.value);

    let numeroConvertido = converteParaBaseDesejada(baseOrigem, baseDestino, numeroInp);
    resultadoElemento.innerHTML = `O resultado é ${numeroConvertido}`;
});

