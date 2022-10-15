//DEFINE QUESTIONS AND ANSWERS.  Created OBJECTS.
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
  ];//End of questions

  var startButton = document.getElementById("start-btn")
        startButton.addEventListener('click', startGame);

  var questionContainerElement = document.getElementById("question-container")

  function startGame() {
        console.log('started');
        startButton.classList.add("hide");
        questionContainerElement.classList.remove("hide");
        setNextQuestion()
   }
    

   function setNextQuestion(){


   }

   function selectAnswer(){

   }


    