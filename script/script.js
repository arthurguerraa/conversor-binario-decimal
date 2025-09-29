const binarioInput = document.querySelector("#numero");
const baseAtual = document.querySelector("#base");
const baseConversao = document.querySelector("#conversao");
const btnConverter = document.querySelector("#converter");
const resultado = document.querySelector("#resultado");

function converteBinarioParaDecimal(numeroBinario){
    const decimal = parseInt(numeroBinario, 2);
    return decimal;
}

function converteDecimal(numeroBase, numeroConversao){
    const numeroConvertido = "";
    if(numeroConversao.value === "binario"){
         numeroConvertido = (numeroBase, 2);
    }else if(numeroConversao === "hexadecimal"){
        numeroConvertido = (numeroBase, 16);
    }else if(numeroConversao === "octal"){
        numeroConvertido === (numeroBase, 8);
    }

    return numeroConvertido;
}

btnConverter.addEventListener('click', () => {
    const resultadoConversao = ""; 
    if (base.value === "decimal"){
        resultadoConversao = converteDecimal(base, conversao);
        resultado.innerHTML = `O resultado é ${resultadoDecimal}`;
    }
    
});

