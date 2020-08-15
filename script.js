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
    question: 'Which company developed Javascript?',
    answers: [
        { text: 'Netscape', correct: true },
        { text: 'Google', correct: false },
        { text: 'Yahoo', correct: false },
        { text: 'Microsoft', correct: false }
    ],
    question: 'Does JavaScript support automatic type conversion?',
    answers: [
        { text: 'No', correct: false },
        { text: 'Yes', correct: true }
    ],
    question: 'What is the use of blur function',
    answers: [
        { text: 'To hide a specified object.', correct: false },
        { text: 'To set a timer for a object to disappear.', correct: false },
        { text: 'To remove the focus from the specified object.', correct: true },
        { text: 'None of the Above.', correct: false }
    ],
    question: 'Is Javascript case sensitive?',
    answers: [
        { text: 'Yes', correct: true },
        { text: 'No', correct: false }
    ],
    question: 'In Javascript can undefined be defined?',
    answers: [
        { text: 'Yes', correct: true },
        { text: 'No', correct: false }
    ],
    question: 'Which of the following best describes JavaScript?',
    answers: [
        { text: 'A compiled scripting language.', correct: false },
        { text: 'A low-level programming language.', correct: false },
        { text: 'An object-oriented scripting language.', correct: true },
        { text: 'A scripting language precompiled in the browser.', correct: false }
    ],
    question: 'What is the HTML tag under which one can write the JavaScript code?',
    answers: [
        { text: '<js>', correct: false },
        { text: '<javascript>', correct: false },
        { text: '<script>', correct: true },
        { text: '<style>', correct: false }
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