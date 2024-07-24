const image = new Image();
const quizOne = [
  {
    image: (image.src = "../assets/germany.png"),
    question: "What is the capital of Germany?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "Munich", correct: false },
      { text: "Frankfurt", correct: false },
      { text: "London", correct: false },
    ],
  },
  {
    image: (image.src = "../assets/italy.png"),
    question: "What is the capital of Italy?",
    answers: [
      { text: "Venice", correct: false },
      { text: "Rome", correct: true },
      { text: "Paris", correct: false },
      { text: "New York", correct: false },
    ],
  },
  {
    image: (image.src = "../assets/canada.png"),
    question: "What is the capital of Canada?",
    answers: [
      { text: "Vancouver", correct: false },
      { text: "Toronto", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Washington", correct: false },
    ],
  },
  {
    image: (image.src = "../assets/america.webp"),
    question: "What is the capital of America?",
    answers: [
      { text: "Florida", correct: false },
      { text: "California", correct: false },
      { text: "New york", correct: false },
      { text: "Washington, D.C", correct: true },
    ],
  },
  {
    image: (image.src = "../assets/japan.jpg"),
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
    image: (image.src = "../assets/pickachu.png"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Pikachu", correct: true },
      { text: "Bulbasaur", correct: false },
      { text: "Jigglypuff", correct: false },
      { text: "Machop", correct: false },
    ],
  },
  {
    image: (image.src = "../assets/eevee.png"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Abra", correct: false },
      { text: "Eevee", correct: true },
      { text: "Ekans", correct: false },
      { text: "Poliwhirl", correct: false },
    ],
  },
  {
    image: (image.src = "../assets/meowth.jpg"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Muk", correct: false },
      { text: "Doduo", correct: false },
      { text: "Meowth", correct: true },
      { text: "Persian", correct: false },
    ],
  },
  {
    image: (image.src = "../assets/charizard.png"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Ponyta", correct: false },
      { text: "Charmander", correct: false },
      { text: "Caterpie", correct: false },
      { text: "Charizard", correct: true },
    ],
  },
  {
    image: (image.src = "../assets/snorlex.jpg"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Slowbro", correct: false },
      { text: "snorlax", correct: true },
      { text: "Seel", correct: false },
      { text: "Dragonite", correct: false },
    ],
  },
];

/*-------------------------------- Constants --------------------------------*/
const correctAnswerSound = new Audio("../assets/clapping.wav");
const wrongAnswerSound = new Audio("../assets/wonrgAnswer.wav");
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
let imageEl = document.querySelector(".image");
let quiz1EL = document.querySelector("#quiz1");
let quiz2EL = document.querySelector("#quiz2");
/*----------------------------- Event Listeners -----------------------------*/
option1El.addEventListener("click", () => handleCheckGuess(0));
option2El.addEventListener("click", () => handleCheckGuess(1));
option3El.addEventListener("click", () => handleCheckGuess(2));
option4El.addEventListener("click", () => handleCheckGuess(3));
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
}

function handleSelectCategory(quizSelect) {
  currentQuestions = quizSelect;
  renderQuestion();
}



function renderQuestion() {
  imageEl.src = currentQuestions[currentQuestionIdx].image;
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
  if (currentQuestionIdx < currentQuestions.length - 1) {
    currentQuestionIdx++;
    renderQuestion();

  // this is where if there are no more questions, the game decides if the user won or not
  } else {
    questionEl.textContent = `Your score is "${score}, try again!`;
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
quiz1EL.addEventListener("click", () => {
  catergoryContainerEl.style.display = "none";
  answerContainerEl.style.display = "";
  h1ContentEl.textContent = "";
  returnButtonEl.style.display = "block";
  handleSelectCategory(quizOne);
  imageEl.height = 250;
  imageEl.width = 350;
});

quiz2EL.addEventListener("click", () => {
  catergoryContainerEl.style.display = "none";
  answerContainerEl.style.display = "";
  h1ContentEl.textContent = "";
  returnButtonEl.style.display = "block";
  handleSelectCategory(quizTwo);
  imageEl.height = 250;
  imageEl.width = 350;
});

returnButtonEl.addEventListener("click", init);

init();
