const image = new Image();
const quizOne = [
  {
    image: (image.src = "./assets/dragonite.png"),
    alt: (image.alt = "image of dragonite"),
    question: "Dragonite is what type of Pokemon?",
    answers: [
      { text: "Dragon", correct: true },
      { text: "Flying", correct: false },
      { text: "Fire", correct: false },
      { text: "Ground", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/ditto.png"),
    alt: (image.alt = "image of ditto"),
    question: "Ditto is what type of Pokemon?",
    answers: [
      { text: "Fire", correct: false },
      { text: "Normal", correct: true },
      { text: "Flying", correct: false },
      { text: "Psychic", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/caterpie.png"),
    alt: (image.alt = "image of caterpie"),
    question: "Caterpie is what type of Pokemon?",
    answers: [
      { text: "Grass", correct: false },
      { text: "Fire", correct: false },
      { text: "Bug", correct: true },
      { text: "Water", correct: false },
    ],
  },
  {
    image: (image.src = "./assets/ekans.webp"),
    alt: (image.alt = "= image of ekans"),
    question: "Ekans is what type of Pokemon?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Fire", correct: false },
      { text: "Normal", correct: false },
      { text: "Poison", correct: true },
    ],
  },
  {
    image: (image.src = "./assets/gengar.png"),
    alt: (image.alt = "image of gengar"),
    question: "Gengar is what type of Pokemon?",
    answers: [
      { text: "Flying", correct: false },
      { text: "Ghost", correct: true },
      { text: "Normal", correct: false },
      { text: "Psychic", correct: false },
    ],
  },
];

const quizTwo = [
  {
    image: (image.src = "./assets/1.png"),
    alt: (image.alt = "image of pokemon"),
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
    alt: (image.alt = "image of pokemon"),
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
    alt: (image.alt = "image of pokemon"),
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
    alt: (image.alt = "image of pokemon"),
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
    alt: (image.alt = "image of pokemon"),
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
