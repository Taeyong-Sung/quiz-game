const image = new Image();
const quizOne = [
  {
    image: (image.src = "./assets/germany.png"),
    alt: (image.alt = "German flag"),
    question: "What is the capital of Germany?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "Munich", correct: false },
      { text: "Frankfurt", correct: false },
      { text: "London", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/italy.png"),
    alt: (image.alt = "Italy flag"),
    question: "What is the capital of Italy?",
    answers: [
      { text: "Venice", correct: false },
      { text: "Rome", correct: true },
      { text: "Paris", correct: false },
      { text: "New York", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/canada.png"),
    alt: (image.alt = "Canada flag"),
    question: "What is the capital of Canada?",
    answers: [
      { text: "Vancouver", correct: false },
      { text: "Toronto", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Washington", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/america.webp"),
    alt: (image.alt = "= America flag"),
    question: "What is the capital of America?",
    answers: [
      { text: "Florida", correct: false },
      { text: "California", correct: false },
      { text: "New york", correct: false },
      { text: "Washington, D.C", correct: true },
    ],
  },
  {
    image: (image.src = "./assets/japan.png"),
    alt: (image.alt = "japan flag"),
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
    image: (image.src = "./assets/1.png"),
    alt: (image.alt = "picture of pokemon"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Pikachu", correct: true },
      { text: "Bulbasaur", correct: false },
      { text: "Jigglypuff", correct: false },
      { text: "Machop", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/2.png"),
    alt: (image.alt = "picture of pokemon"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Abra", correct: false },
      { text: "Eevee", correct: true },
      { text: "Ekans", correct: false },
      { text: "Poliwhirl", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/3.jpg"),
    alt: (image.alt = "picture of pokemon"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Muk", correct: false },
      { text: "Doduo", correct: false },
      { text: "Meowth", correct: true },
      { text: "Persian", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/4.png"),
    alt: (image.alt = "picture of pokemon"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Ponyta", correct: false },
      { text: "Charmander", correct: false },
      { text: "Caterpie", correct: false },
      { text: "Charizard", correct: true },
    ],
  },
  {
    image: (image.src = "./assets/5.jpg"),
    alt: (image.alt = "picture of pokemon"),
    question: "What is the name of this Pokemon?",
    answers: [
      { text: "Slowbro", correct: false },
      { text: "Snorlax", correct: true },
      { text: "Seel", correct: false },
      { text: "Dragonite", correct: false },
    ],
  },
];

export { image, quizOne, quizTwo };
