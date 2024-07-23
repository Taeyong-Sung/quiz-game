// const image = new Image()
const quizOne = [
  {
    image: image.src = '../assets/pickachu.png',
    question: "What is the capital of Germany?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "Munich", correct: false },
      { text: "Frankfurt", correct: false },
      { text: "London", correct: false },
    ],
  },
  {
    question: "What is the capital of Italy?",
    answers: [
      { text: "Venice", correct: false },
      { text: "Rome", correct: true },
      { text: "Paris", correct: false },
      { text: "New York", correct: false },
    ],
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Vancouver", correct: false },
      { text: "Toronto", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Washington", correct: false },
    ],
  },
  {
    question: "What is the capital of America?",
    answers: [
      { text: "Florida", correct: false },
      { text: "California", correct: false },
      { text: "New york", correct: false },
      { text: "Washington, D.C", correct: true },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Kyoto", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Osaka", correct: false },
      { text: "Hokkaido", correct: false },
    ],
  },
];

const quizTwo = [
  {
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "Munich", correct: false },
      { text: "Frankfurt", correct: false },
      { text: "London", correct: false },
    ],
  },
  {
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Venice", correct: false },
      { text: "Rome", correct: true },
      { text: "Paris", correct: false },
      { text: "New York", correct: false },
    ],
  },
  {
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Vancouver", correct: false },
      { text: "Toronto", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Washington", correct: false },
    ],
  },
  {
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Florida", correct: false },
      { text: "California", correct: false },
      { text: "New york", correct: false },
      { text: "Washington, D.C", correct: true },
    ],
  },
  {
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Kyoto", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Osaka", correct: false },
      { text: "Hokkaido", correct: false },
    ],
  },
];

/*-------------------------------- Constants --------------------------------*/

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
let returnButtonEl = document.querySelector(".returnButton");
let mainTextEl = document.querySelector(".main");
let questionEl = document.querySelector("#question");
let h1ContentEl = document.querySelector(".h1Content");
let catergoryContainerEl = document.querySelector("#category-container");
let answerContainerEl = document.querySelector("#answer-container");
let imageEl = document.querySelector('.image')
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
  returnButtonEl.style.display = "none";
  score = 0;
  catergoryContainerEl.style.display = "";
  questionEl.textContent = "";
  h1ContentEl.textContent = "Quiz game";
}

function handleSelectCategory() {
  // this is where you'll set your questions
  currentQuestions = quizOne;
  renderQuestion();
}

function renderQuestion() {
  imageEl.textContent = currentQuestions[currentQuestionIdx].image;
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

catergoryContainerEl.addEventListener("click", () => {
  catergoryContainerEl.style.display = "none";
  answerContainerEl.style.display = "";
  h1ContentEl.textContent = "";
  returnButtonEl.style.display = "block";
  handleSelectCategory();
});

returnButtonEl.addEventListener("click", init);

// how to add pictures and toggle through, make new handlecheckguess function?
