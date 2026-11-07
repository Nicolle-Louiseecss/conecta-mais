// 1. Aumentar e Diminuir Fonte
let tamanhoAtualFonte = 100; // Porcentagem base

function alterarFonte(operacao) {
    if (operacao === 'aumentar' && tamanhoAtualFonte < 150) {
        tamanhoAtualFonte += 10;
    } else if (operacao === 'diminuir' && tamanhoAtualFonte > 90) {
        tamanhoAtualFonte -= 10;
    } else if (operacao === 'resetar') {
        tamanhoAtualFonte = 100;
    }
    document.documentElement.style.fontSize = tamanhoAtualFonte + '%';
}

// 2. Alto Contraste
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}

// 3. Abrir e Fechar Menu do Botão Flutuante de Acessibilidade
function alternarMenuAcessibilidade() {
    let painel = document.getElementById('painel-acessibilidade');
    if (painel.style.display === 'block') {
        painel.style.display = 'none';
    } else {
        painel.style.display = 'block';
    }
}

// 4. Leitor de Texto Simples (Speech Synthesis)
function lerTexto(texto) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Para a fala anterior se houver
        let mensagem = new SpeechSynthesisUtterance(texto);
        mensagem.lang = 'pt-BR';
        mensagem.rate = 1.0; // Velocidade normal
        window.speechSynthesis.speak(mensagem);
    } else {
        alert('Seu navegador não suporta recurso de leitura de voz.');
    }
}