const converterButton = document.getElementById('converter');
const resultado = document.getElementById('resultado');
const celsiusInput = document.getElementById('celsius');

function converterParaFahrenheit() {
    const celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        resultado.textContent = 'Por favor, insira um valor válido para a temperatura em Celsius.';
    } else{ 
        const fahrenheit = (celsius * 9/5) + 32;
        resultado.textContent = `A temperatura em Fahrenheit é ${fahrenheit.toFixed(2)}°F.`;
    }
}

converterButton.addEventListener('click', converterParaFahrenheit);
