// /*-------------------------------- Import -----------------------------------*/
import { image, quizOne, quizTwo } from "./data.js";
/*-------------------------------- Constants --------------------------------*/
const correctAnswerSound = new Audio("../assets/clapping.wav");
const wrongAnswerSound = new Audio("../assets/wonrgAnswer.wav");
/*---------------------------- Variables (state) ----------------------------*/
let score = 0;
let currentQuestions, currentQuestionIdx;

/*------------------------ Cached Element References ------------------------*/
let option1El = document.querySelector("#answer1");
let option2El = document.querySelector("#answer2");
let option3El = document.querySelector("#answer3");
let option4El = document.querySelector("#answer4");
let returnButtonEl = document.querySelector(".return-button");
let questionEl = document.querySelector("#question");
let h1ContentEl = document.querySelector(".h1-content");
let catergoryContainerEl = document.querySelector("#category-container");
let answerContainerEl = document.querySelector("#answer-container");
let imageEl = document.querySelector(".image");
let quiz1EL = document.querySelector("#quiz1");
let quiz2EL = document.querySelector("#quiz2");
let descriptionEl = document.querySelector("#description");
/*----------------------------- Event Listeners -----------------------------*/
option1El.addEventListener("click", () => handleCheckGuess(0));
option2El.addEventListener("click", () => handleCheckGuess(1));
option3El.addEventListener("click", () => handleCheckGuess(2));
option4El.addEventListener("click", () => handleCheckGuess(3));

quiz1EL.addEventListener("click", () => {
  catergoryContainerEl.style.display = "none";
  answerContainerEl.style.display = "";
  h1ContentEl.textContent = "";
  returnButtonEl.style.display = "block";
  handleSelectCategory(quizOne);
  imageEl.height = 250;
  imageEl.width = 350;
  descriptionEl.style.display = "none";
});

quiz2EL.addEventListener("click", () => {
  catergoryContainerEl.style.display = "none";
  answerContainerEl.style.display = "";
  h1ContentEl.textContent = "";
  returnButtonEl.style.display = "block";
  handleSelectCategory(quizTwo);
  imageEl.height = 250;
  imageEl.width = 350;
  descriptionEl.style.display = "none";
});

returnButtonEl.addEventListener("click", init);
/*-------------------------------- Functions --------------------------------*/

function init() {
  answerContainerEl.style.display = "none";
  currentQuestionIdx = 0;
  returnButtonEl.style.display = "none";
  score = 0;
  catergoryContainerEl.style.display = "";
  questionEl.textContent = "";
  h1ContentEl.textContent = "Quiz game";
  imageEl.style.display = "block";
  imageEl.src = image.src = "../assets/quizquiz.jpg";
  option1El.style.display = "block";
  option2El.style.display = "block";
  option3El.style.display = "block";
  option4El.style.display = "block";
  descriptionEl.style.display = "block";
}

function handleSelectCategory(quizSelect) {
  currentQuestions = quizSelect;
  renderQuestion();
}

function renderQuestion() {
  imageEl.src = currentQuestions[currentQuestionIdx].image;
  imageEl.alt = currentQuestions[currentQuestionIdx].alt;
  questionEl.textContent = currentQuestions[currentQuestionIdx].question;
  option1El.textContent = currentQuestions[currentQuestionIdx].answers[0].text;
  option2El.textContent = currentQuestions[currentQuestionIdx].answers[1].text;
  option3El.textContent = currentQuestions[currentQuestionIdx].answers[2].text;
  option4El.textContent = currentQuestions[currentQuestionIdx].answers[3].text;
}

function handleCheckGuess(selectedAnswerIdx) {
  // if answer is true, give a point
  if (currentQuestions[currentQuestionIdx].answers[selectedAnswerIdx].correct) {
    score += 1;
    correctAnswerSound.play();
  } else {
    wrongAnswerSound.play();
  }
  // if there are still questions left, advance questionIdx
  if (currentQuestionIdx + 1 < currentQuestions.length) {
    currentQuestionIdx++;
    setTimeout(renderQuestion, 1000);
    // this is where if there are no more questions, the game decides if the user won or not
  } else {
    questionEl.textContent = `Your score is ${score}, try again!`;
    option1El.style.display = "none";
    option2El.style.display = "none";
    option3El.style.display = "none";
    option4El.style.display = "none";
    imageEl.style.display = "none";
    if (score > 3) {
      questionEl.textContent = `Your score is ${score}, you Win`;
      confetti.start(1000);
    }
  }
}

init();
