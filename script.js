var startBtn = document.querySelector(".start");
var timer = document.querySelector(".timer");
var question = document.querySelector("h1");
var answerButtons = document.querySelector(".answerButtons");
console.log(answerButtons);

// Make the start button clickable
startBtn.addEventListener("click", function(){

 // Set the timer   
    var timeLeft = 75;
    var quizTimer = setInterval(function(){

        timeLeft--;
        timer.textContent = ("Time: " + timeLeft);

// Stop the timer
        if(timeLeft === 0)
            clearInterval(quizTimer)
        },1000); 
        console.log(timer);
        console.log(timeLeft);

// Ask First set of question
    question.innerHTML = "Commonly used data types DO NOT include:";
    question.style.textAlign = "left";

// Add the answer options  

    var answers = ["strings", "booleans", "alerts", "numbers"];
    answerButtons.innerHTML = "";

for (i = 0; i< answers.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = answers[i];
    answerButtons.appendChild(btn);
    btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 10px; text-align: left;");
   

}


    /*var answersList = document.createElement("ul");
    var btn1row = document.createElement("li"); 
    var btn2row = document.createElement("li"); 
    var btn3row = document.createElement("li"); 
    var btn4row = document.createElement("li"); 

    var btn1 = document.createElement("button");
        btn1.textContent = "strings";

    var btn2 = document.createElement("button");
        btn2.textContent = "booleans";

    var btn3 = document.createElement("button");
        btn3.textContent = "alerts";

    var btn4 = document.createElement("button");
        btn4.textContent = "numbers";

    answers.appendChild(answersList);
    answersList.appendChildren(btn1row, btn2row, btn3row, btn4row);
    btn1row.appendChild(btn1);
    btn2row.appendChild(btn2);
    btn3row.appendChild(btn3);
    btn4row.appendChild(btn4);*/


})
