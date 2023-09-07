var numeroDado = 0;
var numeroDado1 = 0;

var contarScore = 0;
var contarScore1 = 0;

function validaGame() {
    if (numeroDado == 1) {
        contarScore = 0;
        players0 = false;
        players1 = true;
    } else {
        contarScore += numeroDado;
        console.log("score:", contarScore);
    }

    if (numeroDado1 === 1) {
        contarScore1 = 0;
        players1 = false;
        players0 = true;
    } else {
        contarScore1 += numeroDado1;
        console.log("score:", contarScore1);
    }
}

var players0 = true;
var players1 = false;

function validaPlayer() {
    if (players0) {
        document.getElementById('playerActive0').classList.add('player--active');
        document.getElementById('playerActive1').classList.remove('player--active');
    } else {
        document.getElementById('playerActive0').classList.remove('player--active');
        document.getElementById('playerActive1').classList.add('player--active');
    }
}

const btnNewGame = document.getElementById('btnNewGame');
const scorePlayer0 = document.getElementById('score--0');
const pontuacaoAtual = document.getElementById('current--0');
const scorePlayer1 = document.getElementById('score--1');
const currentScore = document.getElementById('current--1');

btnNewGame.addEventListener('click', () => {
    // Zere as pontuações
    scorePlayer0.textContent = 0;
    scorePlayer1.textContent = 0;
    pontuacaoAtual.textContent = 0;
    currentScore.textContent = 0;

    // Volte ao Player 1
    document.getElementById('playerActive0').classList.add('player--active');
    document.getElementById('playerActive1').classList.remove('player--active');

    // Defina players0 como ativo ao reiniciar o jogo
    players0 = true;
    players1 = false;
});

var btnRolarDados = document.getElementById('btnRolarDados');

btnRolarDados.addEventListener('click', () => {
    numeroDado = Math.floor(Math.random() * 6) + 1;
    numeroDado1 = Math.floor(Math.random() * 6) + 1;

    if (players0) {
        validaGame();
        pontuacaoAtual.textContent = contarScore;
        validaPlayer();

        if (numeroDado === 1) {
            players0 = false;
            players1 = true;
            validaGame();
            validaPlayer();
        }
    } else {
        validaGame();
        currentScore.textContent = contarScore1;
        validaPlayer();

        if (numeroDado1 === 1) {
            players0 = true;
            players1 = false;
            validaGame();
            validaPlayer();
        }
    }
});
