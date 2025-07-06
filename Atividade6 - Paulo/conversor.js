  const botaoConverter = document.getElementById("converter");
  const campoMetros = document.getElementById("metros");
  const resultado = document.getElementById("resultadoConversao");

  botaoConverter.addEventListener("click", () => {
    const metros = parseFloat(campoMetros.value);

    if (!isNaN(metros)) {
      const centimetros = metros * 100;
      resultado.textContent = `${metros} metros é igual a ${centimetros} centímetros.`;
    } else {
      resultado.textContent = "Por favor, digite um valor válido em metros.";
    }
  });

