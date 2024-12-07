// Quiz questions array with questions, options, and correct answers
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Modern Language", correct: false },
            { text: "Hyper Transfer Markup Language", correct: false },
            { text: "Hyper Text Modern Links", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        answers: [
            { text: "spacing", correct: false },
            { text: "margin", correct: true },
            { text: "padding", correct: false },
            { text: "gap", correct: false }
        ]
    },
    {
        question: "What is the purpose of JavaScript's 'querySelector' method?",
        answers: [
            { text: "To create new HTML elements", correct: false },
            { text: "To select the first element matching a CSS selector", correct: true },
            { text: "To query a database", correct: false },
            { text: "To select multiple elements", correct: false }
        ]
    },
    {
        question: "What is the box-sizing CSS property used for?",
        answers: [
            { text: "To create boxes in the layout", correct: false },
            { text: "To control how the total width and height of an element is calculated", correct: true },
            { text: "To add box shadows", correct: false },
            { text: "To create flexible boxes", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        answers: [
            { text: "To make code run faster", correct: false },
            { text: "To handle asynchronous operations", correct: true },
            { text: "To create animations", correct: false },
            { text: "To synchronize multiple functions", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to create a navigation menu?",
        answers: [
            { text: "<navigation>", correct: false },
            { text: "<nav>", correct: true },
            { text: "<menu>", correct: false },
            { text: "<navbar>", correct: false }
        ]
    },
    {
        question: "What is the purpose of CSS Grid?",
        answers: [
            { text: "To create two-dimensional layouts", correct: true },
            { text: "To add animations", correct: false },
            { text: "To style text", correct: false },
            { text: "To validate forms", correct: false }
        ]
    },
    {
        question: "What is the difference between let and const in JavaScript?",
        answers: [
            { text: "let is block-scoped, const is function-scoped", correct: false },
            { text: "let can be reassigned, const cannot", correct: true },
            { text: "let is slower than const", correct: false },
            { text: "There is no difference", correct: false }
        ]
    },
    {
        question: "What is the purpose of the alt attribute in an img tag?",
        answers: [
            { text: "To make images load faster", correct: false },
            { text: "To provide alternative text for accessibility", correct: true },
            { text: "To style the image", correct: false },
            { text: "To link to another image", correct: false }
        ]
    },
    {
        question: "What is a media query in CSS?",
        answers: [
            { text: "A way to query databases", correct: false },
            { text: "A method to apply styles based on device characteristics", correct: true },
            { text: "A JavaScript function", correct: false },
            { text: "A type of HTML tag", correct: false }
        ]
    },
    {
        question: "What is the purpose of localStorage in web browsers?",
        answers: [
            { text: "To store data persistently in the browser", correct: true },
            { text: "To store server-side data", correct: false },
            { text: "To cache images", correct: false },
            { text: "To store cookies", correct: false }
        ]
    },
    {
        question: "What is the difference between display: none and visibility: hidden?",
        answers: [
            { text: "They are the same", correct: false },
            { text: "display: none removes from layout, visibility: hidden only hides", correct: true },
            { text: "visibility: hidden removes from layout, display: none only hides", correct: false },
            { text: "Both remove the element from layout", correct: false }
        ]
    },
    {
        question: "What is the purpose of the fetch API in JavaScript?",
        answers: [
            { text: "To fetch local files", correct: false },
            { text: "To make HTTP requests", correct: true },
            { text: "To fetch images only", correct: false },
            { text: "To fetch CSS styles", correct: false }
        ]
    },
    {
        question: "What is the purpose of semantic HTML?",
        answers: [
            { text: "To make websites look better", correct: false },
            { text: "To provide meaning and structure to web content", correct: true },
            { text: "To improve website speed", correct: false },
            { text: "To add animations", correct: false }
        ]
    },
    {
        question: "What is the difference between position: relative and position: absolute?",
        answers: [
            { text: "relative is positioned relative to its normal position, absolute to its parent", correct: true },
            { text: "They are the same", correct: false },
            { text: "absolute is positioned relative to its normal position", correct: false },
            { text: "relative is always fixed to the viewport", correct: false }
        ]
    },
    {
        question: "What is the purpose of the addEventListener method?",
        answers: [
            { text: "To add CSS styles", correct: false },
            { text: "To handle events on HTML elements", correct: true },
            { text: "To add HTML elements", correct: false },
            { text: "To add JavaScript files", correct: false }
        ]
    },
    {
        question: "What is the purpose of the viewport meta tag?",
        answers: [
            { text: "To improve SEO", correct: false },
            { text: "To control layout on mobile browsers", correct: true },
            { text: "To add viewport animations", correct: false },
            { text: "To control server settings", correct: false }
        ]
    },
    {
        question: "What is the purpose of npm in web development?",
        answers: [
            { text: "To style websites", correct: false },
            { text: "To manage JavaScript packages and dependencies", correct: true },
            { text: "To create HTML elements", correct: false },
            { text: "To manage databases", correct: false }
        ]
    },
    {
        question: "What is the purpose of the DOCTYPE declaration?",
        answers: [
            { text: "To declare JavaScript code", correct: false },
            { text: "To specify the HTML version being used", correct: true },
            { text: "To declare CSS styles", correct: false },
            { text: "To declare the website title", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        answers: [
            { text: "To make code run faster", correct: false },
            { text: "To enable strict mode and catch common coding mistakes", correct: true },
            { text: "To include external JavaScript files", correct: false },
            { text: "To restrict CSS usage", correct: false }
        ]
    }
];

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;

// Get DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Display the current question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    questionNumber.innerHTML = `Question ${questionNo} of ${questions.length}`;

    // Create answer buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Reset the quiz state
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Handle answer selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Show the final score
function showScore() {
    resetState();
    questionElement.style.display = "none";
    document.querySelector(".quiz-footer").style.display = "none";
    scoreContainer.classList.remove("hide");
    scoreElement.innerHTML = score;
}

// Handle next button click
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listeners
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

restartButton.addEventListener("click", () => {
    scoreContainer.classList.add("hide");
    questionElement.style.display = "block";
    document.querySelector(".quiz-footer").style.display = "flex";
    startQuiz();
});

// Start the quiz when the page loads
startQuiz(); 