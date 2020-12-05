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
        btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left;");
        btn.classList.add(answers[i]);
    
        //Make the answer buttons clickable
        btn.addEventListener("click",function(event){
            var element = event.target;
            var correctAnswer = document.querySelector(".alerts");

            if (element === correctAnswer) {
                var response = document.createElement("div");
                var line = document.createElement("hr");
                response.textContent = ("Correct!");
                answerButtons.appendChild(line);
                answerButtons.appendChild(response);
                response.setAttribute("style", "text-align: left; font-style: italic; color: rgb(151, 149, 149);");
            } 
            
            else {
                var response = document.createElement("div");
                var line = document.createElement("hr");
                response.textContent = ("Wrong!");
                answerButtons.appendChild(line);
                answerButtons.appendChild(response);
                response.setAttribute("style", "text-align: left; font-style: italic; color: rgb(151, 149, 149);");
            }

        });    
    }

});



