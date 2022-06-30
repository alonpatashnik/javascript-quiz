// questions array
var question = [
    {
        question: "2+2",
        answers: [3,4,5,6],
        correctAnswer: "4"
    },
    {
        question: "2+3",
        answers: [3,4,5,6],
        correctAnswer: "5"
    },
    {
        question: "2+4",
        answers: [3,4,5,6],
        correctAnswer: "6"
    },
    {
        question: "1+2",
        answers: [3,4,5,6],
        correctAnswer: "3"
    },
    {
        question: "1+3",
        answers: [3,4,5,6],
        correctAnswer: "4"
    },

]
// currentQuestion
var currentQuestion = 0;
// timeLeft
var timeLeft;
// score
var score = 0;
// var btn1 = querySelector("#btn-1")
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');

var questionCounter = 0;
var correctCount = 0;

var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('ourQuestion');

var timeInterval;


// startGame
    // triggered event listener on startGame
    // start timer
    // setup 1st question
    // loadQuestion()

// timer
    // set interval()
    // render to page

// loadQuestion
    // render question and multiple choices

// checkAnswer
    // check which button user clicked
    // compare the choice with correct answer
    // act on a right or a wrong answer
    // loadQuestion()

// endGame
    //called at the end of time OR when qurrent question is greater than number of questions
    //cancel timer
    //prompt for user initials
    // local storage
        //1. read ls and store in js variable
        //2. check if null
        //3. update js variable with our new score
        //4. render to page
        //5. save updated js variable to ls
    //make high scores visible
    //prompt to play agian

function startGame() {
    timeLeft = 75;
    console.log(timeLeft);
    startTimer();
    displayQuestion();
}

function startTimer() {
    timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft < 1) {
            clearInterval(timeInterval);
        }
    }, 1000)
}

function displayQuestion() {
    questionEl.textContent = question[questionCounter].question;
    btn1.textContent = question[questionCounter].answers[0];
    btn2.textContent = question[questionCounter].answers[1];
    btn3.textContent = question[questionCounter].answers[2];
    btn4.textContent = question[questionCounter].answers[3];
}

document.addEventListener('click', function(event) {
    var target = event.target;

    if(target.textContent === question[0].correctAnswer) {
        console.log("we were correct");
        questionCounter++;
        console.log(questionCounter);
        displayQuestion();
    }

    console.log(target);
});

function displayCorrect() {
    
}

function displayIncorrect() {

}

startGame();