//defining the questions 

var questions = {
    q1:"What does HTML stand for?",   
    answer1:"Hyper text Markup Language",
    multipleChoice1: ["Hyper text multiple Language", "Hyper text Markup Language", "Hyper Tool Medical Language", "Hello Text Media Language"],
    q2: "What does CSS stand for?",
    answer2:"Cascading Style Sheet",
    multipleChoice2: ["Celestial Style Sheet","Cascading Style Sheet","Class style Short","Core Styling Sheet"],
    q3: "How do we link the JS element in the HTML?",
    answer3:"Using a <script> tag",
    multipleChoice3: ["Using a <link> tag","Using a <section> tag","Using a <nav> tag","Using a <script> tag"],
    q4: "To add a comment in JavaScript you write:?",
    answer4:"//comment",
    multipleChoice4:["'Comment'","//comment", "<comment>","(Comment)"],
    q5: "A function is called by writing the function name followed by:",
    answer5:"functionName()",
    multipleChoice5: ["functionName()","functionName[]", "functionName{}", "functionName#"],
    q6: "How is an array written in JavaScript??",
    answer6:'var shapes = ["circle","square"]',
    multipleChoice6: ['var shapes = circle” square"','var shapes = {circle, square)','var shapes = ("circle", "squares")','var shapes = ["circle", "squares"']
}

function start_timer (event) {
    var start_button = document.getElementById("start_button")
    start_button.classList.add("hide")

    //show timer after start button is clicked
    var showTimer = document.getElementById("timer")
    console.log(showTimer)
    showTimer.classList.remove("hide")

    //need to remove the hide on "question" and "score-section"
    var questionClass = document.getElementById("questions")
    questionClass.classList.remove("hide")

    var scoreSectionClass = document.getElementById("score-section")
    questionClass.classList.remove("hide")
}


document.getElementById("start_button").addEventListener("click", start_timer )



var questionHeader = document.createElement("h2")


//create the text you want to add to the h2 element we created above:
var questionText = document.createTextNode(questions.q1)

// "append" the text to the h2 element
questionHeader.appendChild(questionText)

// save the class name "questions" that we created in the HTML file 
//We save this into a variable so we can then append the html element from above

var htmlQuestions = document.getElementById("questions")

//here we use the variable where we save the div containing the question class and "append" the element we created
htmlQuestions.appendChild(questionHeader)

var answerUl = document.createElement("ul")

for (let i = 0; i < questions.multipleChoice1.length; i++) {
  
    var answerLi = document.createElement("li")
    var answerText = document.createTextNode(questions.multipleChoice1[i])
    answerLi.appendChild(answerText)
    answerUl.appendChild(answerLi)
}

htmlQuestions.appendChild(answerUl)

