// Variável para armazenar o número do dado
var numeroDado = 0;

// Função valida o número e imprime o resultado
function validaGame() {
    if (numeroDado === 1) {
        scorePlayer0.textContent = 0;
        pontuacaoAtual.textContent = 0;
        players0 = false;
    } else {
        var contarScore = parseInt(pontuacaoAtual.textContent) + numeroDado;
        console.log("score:",contarScore);
    }

    if (numeroDado === 1) {
        scorePlayer1.textContent = 0;
        currentScore.textContent = 0;
        players1 = false;
    }
}

// Controle de jogadores
var players0 = true;
var players1 = false;

function validaPlayer() {
    var playerActive0 = document.getElementById('playerActive0');
    var playerActive1 = document.getElementById('playerActive1');

    if (players0) {
        playerActive0.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    } else if (playerActive0 === false) {
        playerActive0.style.backgroundColor = '#c7365f';
    }

    if (players1) {
        playerActive1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    } else if (players1 === false) {
        playerActive1.style.backgroundColor = '#c7365f';
    }
}

// Função reiniciar
const btnNewGame = document.getElementById('btnNewGame');
const scorePlayer0 = document.getElementById('score--0');
const pontuacaoAtual = document.getElementById('current--0');
const scorePlayer1 = document.getElementById('score--1');
const currentScore = document.getElementById('current--1');

btnNewGame.addEventListener('click', () => {
    scorePlayer0.textContent = 0;
    pontuacaoAtual.textContent = 0;
    scorePlayer1.textContent = 0;
    currentScore.textContent = 0;
});

// Criando a função Rolar Dados (PRINCIPAL)
var btnRolarDados = document.getElementById('btnRolarDados');

btnRolarDados.addEventListener('click', () => {
    numeroDado = Math.floor(Math.random() * 6) + 1;
    validaGame();
    validaPlayer();
});
