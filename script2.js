var startButtonEl = document.querySelector('.startButton');

var gameSection

startButtonEl.addEventListener('click', loadGame);

function loadGame () {
    window.location.href = 'game.html';
}
