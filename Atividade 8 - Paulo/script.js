let perfilUsuario = {
    nome: '',
    idade: '',
    sexo: 'masculino',
    peso: '',
    altura: '',
    atividade: '1.2'
};

function mostrarSecao(idSecao) {
    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('ativo');
    });
    
    document.getElementById(idSecao).classList.add('ativo');
    
    document.querySelectorAll('.abas button').forEach(btn => {
        btn.classList.remove('ativo');
    });
    
    const botoes = document.querySelectorAll('.abas button');
    for (let i = 0; i < botoes.length; i++) {
        if (botoes[i].getAttribute('onclick').includes(idSecao)) {
            botoes[i].classList.add('ativo');
            break;
        }
    }
    
    carregarPerfil();
}

function salvarPerfil() {
    if (!document.getElementById('idade').value || 
        !document.getElementById('peso').value || 
        !document.getElementById('altura').value) {
        alert('Por favor, preencha idade, peso e altura para salvar o perfil.');
        return;
    }
    
    perfilUsuario = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        sexo: document.getElementById('sexo').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value,
        atividade: document.getElementById('atividade').value
    };
    
    localStorage.setItem('perfilCalculadoraSaude', JSON.stringify(perfilUsuario));
    
    alert('Perfil salvo com sucesso!');
}

function carregarPerfil() {
    const perfilSalvo = localStorage.getItem('perfilCalculadoraSaude');
    
    if (perfilSalvo) {
        perfilUsuario = JSON.parse(perfilSalvo);
        
        document.getElementById('nome').value = perfilUsuario.nome;
        document.getElementById('idade').value = perfilUsuario.idade;
        document.getElementById('sexo').value = perfilUsuario.sexo;
        document.getElementById('peso').value = perfilUsuario.peso;
        document.getElementById('altura').value = perfilUsuario.altura;
        document.getElementById('atividade').value = perfilUsuario.atividade;
    }
}

function calcularTMB() {
    if (!validarPerfil()) return;
    
    const peso = parseFloat(perfilUsuario.peso);
    const altura = parseFloat(perfilUsuario.altura);
    const idade = parseFloat(perfilUsuario.idade);
    const atividade = parseFloat(perfilUsuario.atividade);
    
    let tmb;
    
    if (perfilUsuario.sexo === 'masculino') {
        tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    } else {
        tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }
    
    const caloriasDiarias = tmb * atividade;
    
    document.getElementById('resultadoTMB').textContent = Math.round(tmb);
    document.getElementById('resultadoCalorias').textContent = Math.round(caloriasDiarias);
}

function calcularAgua() {
    if (!validarPerfil()) return;
    
    const peso = parseFloat(perfilUsuario.peso);
    
    const aguaNecessaria = peso * 35;
    
    document.getElementById('resultadoAgua').textContent = Math.round(aguaNecessaria);
}

function calcularDeficit() {
    if (!validarPerfil()) return;
    
    const pesoPerder = parseFloat(document.getElementById('pesoPerder').value);
    const diasPerder = parseFloat(document.getElementById('diasPerder').value);
    
    if (!pesoPerder || !diasPerder) {
        alert('Por favor, preencha todos os campos para calcular o déficit calórico.');
        return;
    }
    
    const deficitTotal = pesoPerder * 7700;
    const deficitDiario = deficitTotal / diasPerder;
    
    const peso = parseFloat(perfilUsuario.peso);
    const altura = parseFloat(perfilUsuario.altura);
    const idade = parseFloat(perfilUsuario.idade);
    const atividade = parseFloat(perfilUsuario.atividade);
    
    let tmb;
    
    if (perfilUsuario.sexo === 'masculino') {
        tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    } else {
        tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }
    
    const caloriasDiarias = tmb * atividade;
    const caloriasParaPerda = caloriasDiarias - deficitDiario;
    
    document.getElementById('resultadoDeficit').textContent = Math.round(deficitDiario);
    document.getElementById('resultadoCaloriasPerda').textContent = Math.round(caloriasParaPerda);
}

function validarPerfil() {
    if (!perfilUsuario.peso || !perfilUsuario.altura || !perfilUsuario.idade) {
        alert('Por favor, complete seu perfil antes de calcular.');
        mostrarSecao('perfil');
        return false;
    }
    return true;
}

window.onload = function() {
    carregarPerfil();
};