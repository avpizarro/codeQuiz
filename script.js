// Set the required variables

// Get elements from index.html
let startBtn = document.querySelector(".start");
let timer = document.querySelector(".timer");
let questionTitle = document.querySelector("h1");
let answerButtons = document.querySelector(".answerButtons");

// Create new html elements
let line = document.createElement("hr");
let responseAlert = document.createElement("div");
responseAlert.classList.add("responseAlert");

// Variables to keep count
let timeLeft = 75;
let questionCounter = 0;
let quizTimer = [];

// Questions and answers array
let questionAndAnswer = [
  {
    title: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to letiables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];

// Define the functions

// Function to move to the next question
function nextQuestion(event) {
  event.preventDefault();
  questionCounter++;
  render(questionCounter);
  answerButtons.appendChild(line);
  answerButtons.appendChild(responseAlert);

  //   Alert correct or wrong
  if (
    event.target.textContent.slice(3) ===
    questionAndAnswer[questionCounter - 1].correctAnswer
  ) {
    responseAlert.textContent = "Correct!";
  } else {
    responseAlert.textContent = "Wrong!";
    timeLeft = timeLeft - 10;
  }
}

function render(questionIndex) {
  let question = questionAndAnswer[questionIndex];
  if (questionIndex < 5 && timeLeft !== 0) {
    questionTitle.textContent = question.title;
    answerButtons.textContent = "";

    for (let i = 0; i < question.answers.length; i++) {
      let btn = document.createElement("button");
      btn.textContent = [i + 1] + ". " + question.answers[i];
      answerButtons.appendChild(btn);
      btn.classList.add("answer-btn");
      btn.addEventListener("click", nextQuestion);
    }
  } else {
    clearInterval(quizTimer);  
    resultScreen();
  }
}

// Make the start button clickable
startBtn.addEventListener("click", function () {
  // Set the timer
  quizTimer = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;

    // Stop the timer
    if (timeLeft <= 0) {
      clearInterval(quizTimer);
    }
  }, 1000);

  render(questionCounter);
});

let result = document.createElement("div");
let instruction = document.createElement("div");
let initialsInput = document.createElement("input");
let initialsSubmit = document.createElement("button");

function resultScreen() {
  questionTitle.textContent = "All done!";
  timer.textContent = "Time: 0";
  answerButtons.innerHTML = "";

  answerButtons.appendChild(result);
  answerButtons.appendChild(instruction);
  answerButtons.classList.add("resultAlign");
  questionTitle.classList.add("resultAlign");
  instruction.textContent = "Enter initials:    ";
  instruction.appendChild(initialsInput);
  instruction.appendChild(initialsSubmit);

  initialsSubmit.textContent = "Submit";
  result.textContent = "Your score is " + timeLeft;

  result.classList.add("result");
  initialsInput.classList.add("initialsInput");
  initialsSubmit.classList.add("initialsSubmit");

  //Remove corrector wrong alert
  setTimeout(() => {
    responseAlert.textContent = "";
    line.style.display = "none";
  }, 3000);
}

//Input and store the result
let initials = [];

if (JSON.parse(localStorage.getItem("scores")) !== null) {
  initials = JSON.parse(localStorage.getItem("scores"));
}

initialsSubmit.addEventListener("click", function () {
  initials.push(initialsInput.value + " - " + timeLeft);
  initialsInput.value = "";
  localStorage.setItem("scores", JSON.stringify(initials));
});
