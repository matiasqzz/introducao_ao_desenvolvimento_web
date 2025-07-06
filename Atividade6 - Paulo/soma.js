  const botao = document.getElementById("buttonat1");
  const input1 = document.getElementById("numero1");
  const input2 = document.getElementById("numero2");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", () => {
    const valor1 = parseFloat(input1.value);
    const valor2 = parseFloat(input2.value);

    if (!isNaN(valor1) && !isNaN(valor2)) {
      const soma = valor1 + valor2;
      mensagem.textContent = `A soma dos números é ${soma}`;
    } else {
      mensagem.textContent = "Por favor, digite dois números válidos.";
    }
  });
