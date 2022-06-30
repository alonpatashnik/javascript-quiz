function init() {
    var correct = localStorage.getItem('correctCount');
    document.getElementById('yourScore').textContent = "you got " + correct + " questions correct";
}

//set localStorage 'correctCount' to 0

init();