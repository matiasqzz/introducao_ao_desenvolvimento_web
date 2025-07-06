
  const botao = document.getElementById("buttonat1");
  const input = document.getElementById("campoNumero");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", () => {
    const numero = input.value;

    if (numero.trim() !== "") {
      mensagem.textContent = `O número informado foi ${numero}`;
    } else {
      mensagem.textContent = "Por favor, digite um número.";
    }
  });
