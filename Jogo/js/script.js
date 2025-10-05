const personagem = document.querySelector('.personagem');
const obstaculo = document.querySelector('.obstaculo');
const clouds = document.querySelector('.clouds');
const abelhas = document.querySelector('.abelhas');
const botaoIniciar = document.querySelector('.button');
const container = document.querySelector('.container');
const botaoTelaInicial = document.querySelector('.button_link')


let loop;

// Função de pulo
const jump = () => {
    personagem.classList.add('jump');
    setTimeout(() => {
        personagem.classList.remove('jump');
    }, 500);
};

// Sempre escuta tecla
document.addEventListener('keydown', jump);

function iniciarJogo() {
    container.style.display = 'none'; // esconde menu

    // Garante que não há loop antigo rodando
    clearInterval(loop);

    // Reset do Mario
    personagem.src = './images/nezuko.gif';
    personagem.style.width = '200px';
    personagem.style.marginLeft = '0';
    personagem.style.bottom = '0';
    personagem.style.animation = '';
    personagem.style.zIndex = '1';

    // Reset do Pipe
    obstaculo.style.animation = 'pipe-animation 2s infinite linear'; 
    obstaculo.style.left = '';

    // Reset das nuvens e abelhas
    clouds.style.animationPlayState = 'running';
    abelhas.style.animationPlayState = 'running';
    obstaculo.style.animationPlayState = 'running';

    // Ativa o loop do jogo
    loop = setInterval(() => {
        const obstaculoPosition = obstaculo.offsetLeft;
        const personagemPosition = +window
            .getComputedStyle(personagem)
            .bottom.replace('px', '');

        if (obstaculoPosition <= 120 && obstaculoPosition > 0 && personagemPosition < 80) {
            // Para o cano
            obstaculo.style.animation = 'none';
            obstaculo.style.left = `${obstaculoPosition}px`;

            // Para o Mario
            personagem.style.animation = 'none';
            personagem.style.bottom = `${personagemPosition}px`;

            // Troca para a imagem de "game over"
            personagem.src = './images/nezuko_deitada.png';
            personagem.style.width = '200px';
            personagem.style.marginLeft = '50px';

            clearInterval(loop);

            // Mostra novamente o botão com "Recomeçar"
            botaoTelaInicial.textContent = "Tela Inicial"
            botaoIniciar.textContent = "Recomeçar";
            container.style.display = 'flex';
        }
    }, 10);
}

// Evento no botão
botaoIniciar.addEventListener("click", iniciarJogo);
