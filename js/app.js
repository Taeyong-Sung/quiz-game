const quiz = [
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

/*---------------------------- Variables (state) ----------------------------*/
let score = 0;

/*------------------------ Cached Element References ------------------------*/
let selectionEl = document.querySelector(".selection");
let option1El = document.querySelector("#option1");
let option2El = document.querySelector("#option2");
let option3El = document.querySelector("#option3");
let option4El = document.querySelector("#option4");
let titleEl = document.querySelector("#title");
let nextEl = document.querySelector(".nextButton");
let mainEl = document.querySelector(".main");
let h2El = document.querySelector("#h2");
let h1El = document.querySelector(".h1Content");

/*-------------------------------- Functions --------------------------------*/
//this button will take you to the first quiz
option1El.addEventListener("click", () => {
  // console.log('clicked me');
  h1El.textContent = "Quiz One";
});
/*----------------------------- Event Listeners -----------------------------*/
