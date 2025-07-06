const calcularButton = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const raioInput = document.getElementById('raio');

function calcularArea() {
    const raio = parseFloat(raioInput.value);

    if (isNaN(raio) || raio <= 0) {
        resultado.textContent = 'Por favor, insira um valor válido para o raio.';
    } else {
        const area = Math.PI * Math.pow(raio, 2);
        resultado.textContent = `A área do círculo é: ${area.toFixed(2)} metros quadrados.`;
    }
}

calcularButton.addEventListener('click', calcularArea);
