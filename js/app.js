const quizOne = [
  {
    question: "Who am I?",
    answers: [
      { text: "Tae", correct: true },
      { text: "John", correct: false },
      { text: "Tommy", correct: false },
      { text: "Jason", correct: false },
    ],
  },
  {
    question: "Who are you?",
    answers: [
      { text: "Tae", correct: false },
      { text: "John", correct: true },
      { text: "Tommy", correct: false },
      { text: "Jason", correct: false },
    ],
  },
];

/*-------------------------------- Constants --------------------------------*/
// const mainText = "Quiz QUIZ";
/*---------------------------- Variables (state) ----------------------------*/
let score = 0;
let result = 0;
let currentQuestions, currentQuestionIdx;

/*------------------------ Cached Element References ------------------------*/
let selectionEl = document.querySelector(".selection");
let option1El = document.querySelector("#answer1");
let option2El = document.querySelector("#answer2");
let option3El = document.querySelector("#answer3");
let option4El = document.querySelector("#answer4");
let titleEl = document.querySelector("#title");
let nextEl = document.querySelector(".nextButton");
let mainTextEl = document.querySelector(".main");
let questionEl = document.querySelector("#question");
let h1ContentEl = document.querySelector(".h1Content");
let catergoryContainerEl = document.querySelector("#category-container");
let answerContainerEl = document.querySelector("#answer-container");
/*----------------------------- Event Listeners -----------------------------*/
option1El.addEventListener("click", () => handleCheckGuess(0));
option2El.addEventListener("click", () => handleCheckGuess(1));
option3El.addEventListener("click", () => handleCheckGuess(2));
option4El.addEventListener("click", () => handleCheckGuess(3));
/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  answerContainerEl.style.display = "none";
  currentQuestionIdx = 0;
  score = 0;
}

function handleSelectCategory() {
  // this is where you'll set your questions
  currentQuestions = quizOne;
  renderQuestion();
}

function renderQuestion() {
  questionEl.textContent = currentQuestions[currentQuestionIdx].question;
  // console.log(currentQuestions[currentQuestionIdx].answers);
  option1El.textContent = currentQuestions[currentQuestionIdx].answers[0].text;
  // console.log(option1El);
  option2El.textContent = currentQuestions[currentQuestionIdx].answers[1].text;
  option3El.textContent = currentQuestions[currentQuestionIdx].answers[2].text;
  option4El.textContent = currentQuestions[currentQuestionIdx].answers[3].text;
}

function handleCheckGuess(selectedAnswerIdx) {
  // if answer is true, give a point
  if (currentQuestions[currentQuestionIdx].answers[selectedAnswerIdx].correct) {
    score += 1;
  }
  // if there are still questions left, advance questionIdx
  if (currentQuestionIdx < currentQuestions.length - 1) {
    currentQuestionIdx++;
    renderQuestion();
  } else {
    console.log(`"Your score is "${score}`);
  }
}

// this is where if the user clicks on the buttons to see if it is correct or not

catergoryContainerEl.addEventListener("click", () => {
  answerContainerEl.style.display = "";
  catergoryContainerEl.style.display = "none";
  h1ContentEl.textContent = "Name";
  handleSelectCategory();
});
