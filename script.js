let qHead = document.querySelector("#qHeader");
let qStart = document.querySelector("#start");
let qGameContainer = document.querySelector("#game-container");
let qQuestionArea = document.querySelector("#question-area");
let qAnswerArea = document.querySelector("#answer-area");
let qHighScore = document.querySelector("#high-score");
let qCountdown = document.querySelector("#countdown");
let qResults = document.querySelector("#results");
let qTotalTime = 60;
let qScore = 0;
let qCorrect;

qStart.addEventListener("click", startGame);

function startGame() {
    qQuestionArea.textContent = questions[0].question
    for (let i = 0; i < questions[0].answers.length; i++) {
        const element = questions[0].answers[i]
        const btn = document.createElement('button')
        btn.textContent = element.text;
        qAnswerArea.appendChild(btn);
        console.log(questions[0]);
        //testAnswer();
    }
}



let questions = [{
    question: 'What is the name for the Jewish New Year?',
    answers: [
        { text: 'Rosh Hashanah', correct: true },
        { text: 'Yom Kippur', correct: false },
        { text: 'Hanukkah', correct: false },
        { text: 'Kwanza', correct: false }
    ],
    question: 'How many blue stripes are there on the U.S. flag?',
    answers: [
        { text: '6', correct: false },
        { text: '7', correct: false },
        { text: '13', correct: false },
        { text: '0', correct: true }
    ],
    question: 'Which one of these characters is not friends with Harry Potter?',
    answers: [
        { text: 'Ron Weasley', correct: false },
        { text: 'Neville Longbottom', correct: false },
        { text: 'Draco Malfoy', correct: true },
        { text: 'Hermione Granger', correct: false }
    ],
    question: 'Which country held the 2016 Summer Olympics?',
    answers: [
        { text: 'China', correct: false },
        { text: 'Russia', correct: false },
        { text: 'Brazil', correct: true },
        { text: 'Italy', correct: false }
    ],
    question: 'Which planet is the hottest?',
    answers: [
        { text: 'Venus', correct: false },
        { text: 'Saturn', correct: false },
        { text: 'Mercury', correct: true },
        { text: 'Mars', correct: false }
    ],
    question: 'In which city can you find the Liberty Bell?',
    answers: [
        { text: 'Houston', correct: false },
        { text: 'Boston', correct: false },
        { text: 'Philadelphia', correct: true },
        { text: 'Manhattan', correct: false }
    ],
    question: 'Linda and Bob from Bob’s Burgers have 3 kids. Which one of these characters is not one of them?',
    answers: [
        { text: 'Louise', correct: false },
        { text: 'Gene', correct: false },
        { text: 'Jimmy', correct: true },
        { text: 'Tina', correct: false }
    ]

}]

//const timeLeftDisplay = document.querySelector('#countdown')
//const startBtn = document.querySelector('#start')
//let timeLeft = 60

//function countDown() {
//setInterval(function() {
//if (timeLeft <= 0) {
//clearInterval(timeLeft = 0)
//}
//timeLeftDisplay.innerHTML = timeLeft
//timeLeft -= 1
//}, 1500)
//}

//function startTimer() {
//interval = setInterval(function() {
//if (timer <= -1) {
//clearInterval(timer);
//} else {
//timer--
//}
//}, 1000)
//};

function testAnswer() {
    let result;
    if (correct == true) {
        result = "true";
        qResults.textContent = "Great..."
    } else {
        result = "false";
    }
    return result;
}