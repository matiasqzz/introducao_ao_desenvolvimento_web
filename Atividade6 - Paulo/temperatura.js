const converterButton = document.getElementById('converter');
const resultado = document.getElementById('resultado');
const fahrenheitInput = document.getElementById('fahrenheit');

function converterParaCelsius() {
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (isNaN(fahrenheit)) {
        resultado.textContent = 'Por favor, insira um valor válido para a temperatura em Fahrenheit.';
    } else {
        const celsius = 5 * ((fahrenheit - 32) / 9);
        resultado.textContent = `A temperatura em Celsius é: ${celsius.toFixed(2)}°C`;
    }
}

converterButton.addEventListener('click', converterParaCelsius);
