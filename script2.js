var startButtonEl = document.querySelector('.startButton');
var externalHtml = document.getElementsByTagName('link')[0].import;

var gameSection

startButtonEl.addEventListener('click', loadGame);

function loadGame () {
    var loadGame = document.getElementById('myGame');
    if (loadGame === "none") {
        loadGame.style.display = 'block';
    } else {
        loadGame.style.display = "none";
    }
}
