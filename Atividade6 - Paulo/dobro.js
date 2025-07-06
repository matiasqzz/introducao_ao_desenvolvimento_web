const calcularButton = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const ladoInput = document.getElementById('lado');

function calcularArea() {
    const lado = parseFloat(ladoInput.value);

    if (isNaN(lado) || lado <= 0) {
        resultado.textContent = 'Por favor, insira um valor válido para o lado.';
    } else {
        const area = Math.pow(lado, 2);
        const dobroArea = area * 2;
        resultado.textContent = `A área do quadrado é: ${area.toFixed(2)} metros quadrados. O dobro da área é: ${dobroArea.toFixed(2)} metros quadrados.`;
    }
}

calcularButton.addEventListener('click', calcularArea);
