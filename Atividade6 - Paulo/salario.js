const calcularButton = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const salarioHoraInput = document.getElementById('salarioHora');
const horasMesInput = document.getElementById('horasMes');

function calcularSalario() {
    const salarioHora = parseFloat(salarioHoraInput.value);
    const horasMes = parseFloat(horasMesInput.value);

    if (isNaN(salarioHora) || isNaN(horasMes) || salarioHora <= 0 || horasMes <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos para o salário por hora e as horas trabalhadas.';
    } else {
        const salarioMensal = salarioHora * horasMes;
        resultado.textContent = `Seu salário mensal é: R$ ${salarioMensal.toFixed(2)}`;
    }
}

calcularButton.addEventListener('click', calcularSalario);
