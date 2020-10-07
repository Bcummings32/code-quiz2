var currentQuestionIndex = 0;
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var timerId;

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

  var time = questions.length * 15;
var timerId;

  function timeInterval() {
    // update time
    time--;
    timerEl.textContent = time;
  
    // check if user ran out of time

    //under quizEnd
    if (time <= 0) {
      quizEnd();
  }};
    startBtn.onclick=quizStart

  function quizStart() {
      var startScreenEl = document.getElementById('start-screen');
      startScreenEl.setAttribute('class','hide');
      questionsEl.removeAttribute('class');
      timerId=setInterval(timeInterval, 1000) 
    timerEl.textContent=time
    quizQuestion();
  };

  function quizQuestion() {
    var currentQuestion=questions[currentQuestionIndex]
    var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
   
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
   
    choiceNode.onclick = selectAnswer;
    // display on the page
    choicesEl.appendChild(choiceNode);
   } )};
  
  function selectAnswer() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        // penalize time
        time -= 15;
        if (time < 0) {
          time = 0;
        }
        // display new time on page
        timerEl.textContent = time;
        
        feedbackEl.textContent = "Ah Hell nah. Wrong!";
    } else {
      feedbackEl.textContent = "That is Correct!";
    }
    feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);


      // move to next question
      currentQuestionIndex++;
      // check if we've run out of questions
      if (currentQuestionIndex === questions.length) {
        quizEnd();
      } else {
        quizQuestion();
      }
    }

  function quizEnd() {
      questionsEl.setAttribute("class", "hide");
     var endQuestionScreen = document.getElementById("end-screen");
     endQuestionScreen.removeAttribute("class");
     //Use time as the score and render by setting it equal to textContent
     var score = document.getElementById("final-score");
     score.textContent = time;
     console.log("QUIZ IS OVER!!")
 };
    
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
