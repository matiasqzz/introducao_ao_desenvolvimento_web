document.getElementById("botao-tema").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  var botaoTema = document.getElementById("botao-tema");
  if (document.body.classList.contains("dark-mode")) {
    botaoTema.innerText = "Modo claro";
  } else {
    botaoTema.innerText = "Modo escuro";
  }
});

document.getElementById("botao").addEventListener("click", function (e) {
  e.preventDefault();

  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var mensagem = document.getElementById("mensagem");
  var sucesso = document.getElementById("mensagem-sucesso");

  var nomeValor = nome.value.trim();
  var emailValor = email.value.trim();
  var mensagemValor = mensagem.value.trim();

  var valido = true;

  var erros = document.querySelectorAll(".erro-msg");
  for (var i = 0; i < erros.length; i++) {
    erros[i].remove();
  }

  if (sucesso) {
    sucesso.remove();
  }

  nome.style.border = "";
  email.style.border = "";
  mensagem.style.border = "";

  if (nomeValor === "") {
    var erroNome = document.createElement("span");
    erroNome.className = "erro-msg";
    erroNome.innerText = "O campo Nome não foi preenchido.";
    nome.after(erroNome);
    nome.style.border = "2px solid red";
    valido = false;
  }

  if (emailValor === "") {
    var erroEmail = document.createElement("span");
    erroEmail.className = "erro-msg";
    erroEmail.innerText = "O campo E-mail não foi preenchido.";
    email.after(erroEmail);
    email.style.border = "2px solid red";
    valido = false;
  } else if (!emailValor.includes("@") || emailValor.includes(" ")) {
    var erroEmailInvalido = document.createElement("span");
    erroEmailInvalido.className = "erro-msg";
    erroEmailInvalido.innerText = "O campo E-mail está inválido.";
    email.after(erroEmailInvalido);
    email.style.border = "2px solid red";
    valido = false;
  }

  if (mensagemValor === "") {
    var erroMsg = document.createElement("span");
    erroMsg.className = "erro-msg";
    erroMsg.innerText = "O campo Mensagem não foi preenchido.";
    mensagem.after(erroMsg);
    mensagem.style.border = "2px solid red";
    valido = false;
  }

  if (valido) {
    var textoSucesso = document.createElement("p");
    textoSucesso.id = "mensagem-sucesso";
    textoSucesso.innerText = "Mensagem enviada com sucesso!";
    textoSucesso.style.color = "green";
    textoSucesso.style.fontWeight = "bold";

    var botao = document.getElementById("botao");
    botao.after(textoSucesso);
  }
});
