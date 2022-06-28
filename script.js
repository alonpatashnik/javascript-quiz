// I need to set a variable equal to the timer ID from my HTML
// I n


var timerEl = document.getElementById('#timer');

function countdown () {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.innerHTML = "Time left: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            document.querySelector('main').textContent = "Game Over!!"
        }
    }, 1000);
}

countdown();

//creating an array full of objects. Each o
var questions = [
    {
        //questions[0]
        question: "Commonly used data types DO NOT include: ",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },

    {
        //questions[1]
        question: "Commonly used data types DO NOT include: ",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },

    {
        //questions[2]
        question: "Commonly used data types DO NOT include: ",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },

    {
        //questions[3]
        question: "Commonly used data types DO NOT include: ",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },

    {
        //questions[4]
        question: "Commonly used data types DO NOT include: ",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
];

//USE LOCAL STORAGE TO STORE HIGH SCORES 
