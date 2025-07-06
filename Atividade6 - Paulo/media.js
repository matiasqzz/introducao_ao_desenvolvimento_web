  const botao = document.getElementById("buttonat1");
  const nota1 = document.getElementById("nota1");
  const nota2 = document.getElementById("nota2");
  const nota3 = document.getElementById("nota3");
  const nota4 = document.getElementById("nota4");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", () => {
    const n1 = parseFloat(nota1.value);
    const n2 = parseFloat(nota2.value);
    const n3 = parseFloat(nota3.value);
    const n4 = parseFloat(nota4.value);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)) {
      const media = (n1 + n2 + n3 + n4) / 4;
      mensagem.textContent = `A média bimestral é ${media.toFixed(2)}`;
    } else {
      mensagem.textContent = "Por favor, digite as 4 notas corretamente.";
    }
  });
