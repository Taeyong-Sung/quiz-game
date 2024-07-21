/*------- Cached Element References ------*/
const firstQuizButtonEl = document.querySelector("#firstQuiz");
const secondQuizButtonEl = document.querySelector("#secondQuiz");
const mainPageH1El = document.querySelector(".mainPageH1")
const messageH2El = document.querySelector("#message")
const imageOfElephantEl = document.querySelector("#picture")
/*-------- Functions -----------------*/
firstQuizButtonEl.addEventListener("click", () => {
    console.log("clicked me")
    mainPageH1El.textContent = "Guess the correct animal!"
    messageH2El.textContent = ''
    firstQuizButtonEl.textContent = 'Elephant'
    secondQuizButtonEl.textContent = 'Tiger'
    imageOfElephantEl.src = "../assets/elephant.webp"
});

secondQuizButtonEl.addEventListener("click", () => {
    console.log("clicked mee")
});

function render() {
    refreshPage()
}
// This is where adding a image tag to HTML making it hidden and clicking button unhides it
function refreshPage() {
    mainPageH1El.textContent = "Hello"
}


