function init() {
    var correct = localStorage.getItem('correctCount');
    document.getElementById('yourScore').textContent = "you got " + correct + " questions correct";
}

localStorage.setItem('')
var subBut = document.getElementById('subButton');
subBut.addEventListener('click', function() {

})

init();