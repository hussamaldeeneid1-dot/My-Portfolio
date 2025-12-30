const quizData = [
  {
    question: "What is the main purpose of a To-Do List app?",
    choices: [
      "To manage daily tasks",
      "To watch videos",
      "To play music",
      "To draw pictures",
    ],
    correct: 0,
  },
  {
    question:
      "Which HTML element is commonly used to create a button in a web page?",
    choices: ["<div>", "<span>", "<button>", "<header>"],
    correct: 2,
  },
  {
    question:
      "In JavaScript, which method is used to add an item to the end of an array?",
    choices: ["pop()", "push()", "shift()", "unshift()"],
    correct: 1,
  },
  {
    question: "Which CSS property changes the background color of an element?",
    choices: ["color", "background-color", "font-size", "border"],
    correct: 1,
  },
  {
    question: "What does the Local Storage in web browsers allow you to do?",
    choices: [
      "Store data temporarily during a session",
      "Store data permanently in the browser",
      "Send emails",
      "Run server-side code",
    ],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choiceBtns = document.querySelectorAll(".choice-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  choiceBtns.forEach((btn, index) => {
    btn.textContent = q.choices[index];
  });
}

choiceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const q = quizData[currentQuestion];
    const selected = parseInt(btn.getAttribute("data-index"));
    if (selected === q.correct) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Finished!";
      choiceBtns.forEach((b) => (b.style.display = "none"));
      scoreEl.textContent = `Final Score: ${score} / ${quizData.length}`;
    }
    scoreEl.textContent = `Score: ${score}`;
  });
});

loadQuestion();
