const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionConstainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const buttonElements = document.getElementById("answers").children;
let currentQuestionIndex = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", setNextQuestion);

function startGame() {
  console.log("started");
  startButton.classList.add("hide");
  questionConstainer.classList.remove("hide");
  setNextQuestion();
}

let question = {
  question: "question Text",
  answers: [
    { text: "answer Text", isCorrect: true },
    { text: "answer Text", isCorrect: false },
    { text: "answer Text", isCorrect: false },
    { text: "answer Text", isCorrect: false },
  ],
  questionMarks: 1,
  questionType: "technical",
};

let questionArray = [];
let question1 = {
  question: "Choose the correct HTML element for the largest heading:",
  answers: [
    { text: "<head>", isCorrect: false },
    { text: "<h1>", isCorrect: true },
    { text: "<heading>", isCorrect: false },
    { text: "<h6>", isCorrect: false },
  ],
};
question1.__proto__ = question;
questionArray.push(question1);

let question2 = {
  question: "Which of the following is a type of CSS?",
  answers: [
    { text: "External", isCorrect: false },
    { text: "Internal", isCorrect: false },
    { text: "Inline", isCorrect: false },
    { text: "All of these", isCorrect: true },
  ],
};
question2.__proto__ = question;
questionArray.push(question2);

let question3 = {
  question: "Which type of JavaScript language is ___",
  answers: [
    { text: "Object-Oriented", isCorrect: false },
    { text: "Assembly-language", isCorrect: false },
    { text: "Object-Based", isCorrect: true },
    { text: "High-level", isCorrect: false },
  ],
};
question3.__proto__ = question;
questionArray.push(question3);

function setNextQuestion() {
  if (currentQuestionIndex != questionArray.length) {
    showQuestion(questionArray[currentQuestionIndex++]);
    resetAnswers();
  }
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].innerText = question.answers[i].text;
    buttonElements[i].dataset.correct = question.answers[i].isCorrect;
    buttonElements[i].addEventListener("click", selectAnswer);
  }
  nextButton.classList.add("hide");
}

function resetAnswers() {
  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].className = "";
  }
}

function selectAnswer(e) {
  const button = e.target;
  for (var i = 0; i < buttonElements.length; i++) {
    if (buttonElements[i].dataset.correct == "true") {
      buttonElements[i].classList.add("correct");
    }
    buttonElements[i].removeEventListener("click", selectAnswer);
  }
  if (button.dataset.correct == "false") {
    button.classList.add("wrong");
  }
  nextButton.classList.remove("hide");
}
