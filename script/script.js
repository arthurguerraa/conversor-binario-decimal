const binarioInput = document.querySelector("#binario");
const btnConverter = document.querySelector("#converter");
const resultado = document.querySelector("#resultado");

function converteDecimal(numeroBinario){
    const decimal = parseInt(numeroBinario, 2);
    return decimal;
}

btnConverter.addEventListener('click', () => {
    const valorBinario = binarioInput.value;
    const resultadoDecimal = converteDecimal(valorBinario);
    resultado.innerHTML = `O resultado é ${resultadoDecimal}`;
});

