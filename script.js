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

    // Ask first question
    question.innerHTML = "Commonly used data types DO NOT include:";
    question.style.textAlign = "left";

    // Add the first question answer options  
    var answers = ["strings", "booleans", "alerts", "numbers"];
    answerButtons.innerHTML = "";

    //Add a button for each answer option
    for (i = 0; i< answers.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = ([i+1]+ ". " + answers[i]);
        answerButtons.appendChild(btn);
        btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left;");
        btn.classList.add(answers[i]);
    
        //Make the answer buttons clickable
        btn.addEventListener("click",function(event){
            var element = event.target;
            var correctAnswer1 = document.querySelector(".alerts");


                // Ask second question
                question.innerHTML = "The condition in an if / else statement is enclosed within ____.";
                question.style.textAlign = "left";

                // Add the second question answer options  
                var answers = ["quotes", "curly brackets", "parentheses", "square brackets"];
                answerButtons.innerHTML = "";

                //Turn the second answer options into buttons
                for (i = 0; i< answers.length; i++) {
                    var btn = document.createElement("button");
                    btn.textContent = ([i+1]+ ". " + answers[i]);
                    answerButtons.appendChild(btn);
                    btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left; width: 180px;");
                    btn.classList.add(answers[i].replace(/\s/g, ''));
                    console.log(btn);

                }

                var line = document.createElement("hr");
                answerButtons.appendChild(line);
                var response = document.createElement("div");
                response.setAttribute("style", "text-align: left; font-style: italic; color: rgb(151, 149, 149);");
                

                if (element === correctAnswer1) {
                    response.textContent = ("Correct!");
                    answerButtons.appendChild(response);
                }

                else {
                    response.textContent = ("Wrong!");
                    answerButtons.appendChild(response);
                }

                //Make the answer buttons clickable
                btn.addEventListener("click",function(event){
                    var element = event.target;
                    var correctAnswer2 = document.querySelector(".parentheses");
                }) 
                    

        });    
    }

});



