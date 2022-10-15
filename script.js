//defining the questions

var questions = [
  {
    q: "What does HTML stand for?",
    answer: "Hyper text Markup Language",
    multipleChoice: [
      "Hyper text multiple Language",
      "Hyper text Markup Language",
      "Hyper Tool Medical Language",
      "Hello Text Media Language",
    ],
  },
  {
    q: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    multipleChoice: [
      "Celestial Style Sheet",
      "Cascading Style Sheet",
      "Class style Short",
      "Core Styling Sheet",
    ],
  },
  {
    q: "How do we link the JS element in the HTML?",
    answer: "Using a <script> tag",
    multipleChoice: [
      "Using a <link> tag",
      "Using a <section> tag",
      "Using a <nav> tag",
      "Using a <script> tag",
    ],
  },
  {
    q: "To add a comment in JavaScript you write:?",
    answer: "//comment",
    multipleChoice: ["'Comment'", "//comment", "<comment>", "(Comment)"],
  },
  {
    q: "A function is called by writing the function name followed by:",
    answer: "functionName()",
    multipleChoice: [
      "functionName()",
      "functionName[]",
      "functionName{}",
      "functionName#",
    ],
  },
  {
    q: "How is an array written in JavaScript??",
    answer: 'var shapes = ["circle","square"]',
    multipleChoice: [
      'var shapes = circle” square"',
      "var shapes = {circle, square)",
      'var shapes = ("circle", "squares")',
      'var shapes = ["circle", "squares"',
    ],
  },
];

var currentQuestion = 0;

//makes start button "clickable"
document.getElementById("start_button").addEventListener("click", start_timer);

//start_timer function hides begin quiz button, initiates timer, and shows questions after start button clicked
function start_timer(event) {
  var start_button = document.getElementById("start_button");
  start_button.classList.add("hide");

  //show timer after start button is clicked
  var showTimer = document.getElementById("timer");
  showTimer.classList.remove("hide");

  //need to remove the hide on "question" and "score-section"
  var questionClass = document.getElementById("questions");
  questionClass.classList.remove("hide");

  var scoreSectionClass = document.getElementById("score-section");
  questionClass.classList.remove("hide");
  questionHandler(0);
}

//function that elicits questions and answer list
function questionHandler(questionNumber) {
  var questionHeader = document.createElement("h2");
  //create the text you want to add to the h2 element we created above:
  var questionText = document.createTextNode(questions[questionNumber].q);

  // "append" the text to the h2 element
  questionHeader.appendChild(questionText);

  // save the class name "questions" that we created in the HTML file
  //We save this into a variable so we can then append the html element from above

  var htmlQuestions = document.getElementById("questions");

  //here we use the variable where we save the div containing the question class and "append" the element we created
  htmlQuestions.appendChild(questionHeader);

  var answerUl = document.createElement("ul");

  for (let i = 0; i < questions[questionNumber].multipleChoice.length; i++) {
    var answerLi = document.createElement("li");
    answerLi.classList.add("answer-clicked");
    answerLi.addEventListener("click", answerHandler);
    answerLi.setAttribute("ans", questions[questionNumber].multipleChoice[i]);
    answerLi.setAttribute("q", i);
    var answerText = document.createTextNode(
      questions[questionNumber].multipleChoice[i]
    );
    answerLi.appendChild(answerText);
    answerUl.appendChild(answerLi);
  }
  //var answerButtons= document.createElement("answer-buttons").addEventListener("click")
  //var selectAnswer = document.createElement("button")
  //selectAnswer.innerText = answerUl.text
  htmlQuestions.appendChild(answerUl);
}

function answerHandler() {
  console.log(this.getAttribute("ans"));

  var selectedAnswer = this.getAttribute("ans");
  // var questionNumber = this.getAttribute("q")

  console.log(questions[currentQuestion].answer);

  if (selectedAnswer == questions[currentQuestion].answer) {
    console.log("Got it right dude!");
  } else {
    console.log("Better luck next time");
  }
}

var timerEl = document.getElementById("timer")

//timer function
function countDown() {
  var timeLeft = 120;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, game over
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

countDown();
