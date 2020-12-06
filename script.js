var startBtn = document.querySelector(".start");
var timer = document.querySelector(".timer");
var question = document.querySelector("h1");
var answerButtons = document.querySelector(".answerButtons");
var line = document.createElement("hr");
var response = document.createElement("div");
response.setAttribute("style", "text-align: left; font-style: italic; color: rgb(151, 149, 149);");
var timeleft = 

// Make the start button clickable
startBtn.addEventListener("click", function(){

    // Set the timer   
    var timeLeft = 75;

    var quizTimer = setInterval(function(){

        timeLeft--;
        timer.textContent = ("Time: " + timeLeft);

        // Stop the timer
        if(timeLeft <= 0) {
        clearInterval(quizTimer);
        }
        
    },1000); 

    // Ask first question
    question.innerHTML = "Commonly used data types DO NOT include:";
    question.style.textAlign = "left";

    // Add the first question answer options  
    var answers = ["strings", "booleans", "alerts", "numbers"];
    answerButtons.innerHTML = "";

    //Add a button for each first question answer option
    for (i = 0; i< answers.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = ([i+1]+ ". " + answers[i]);
        answerButtons.appendChild(btn);
        btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left;");
        btn.classList.add(answers[i]);
    
        //Make the first question answer buttons clickable
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

                //Alert correct or wrong
                if (element === correctAnswer1) {
                    response.textContent = ("Correct!");
                    answerButtons.appendChild(line);
                    answerButtons.appendChild(response);
                }

                else {
                    response.textContent = ("Wrong!");
                    answerButtons.appendChild(line);
                    answerButtons.appendChild(response);
                    timeLeft = (timeLeft - 10);
                }

                console.log(timeLeft);

                //Make the second question answer buttons clickables
                btn.addEventListener("click",function(event){
                    var element = event.target;
                    var correctAnswer2 = document.querySelector(".parentheses");
                
                    // Ask third question
                    question.innerHTML = "Arrays in JavaScript can be used to store ____.";
                    question.style.textAlign = "left";

                    // Add the third question answer options  
                    var answers = [
                        "numbers and strings",
                        "other arrays",
                        "booleans",
                        "all of the above"
                        ];
                    
                    answerButtons.innerHTML = "";

                    //Turn the third answer options into buttons
                    for (i = 0; i< answers.length; i++) {
                        var btn = document.createElement("button");
                        btn.textContent = ([i+1]+ ". " + answers[i]);
                        answerButtons.appendChild(btn);
                        btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left; width: 250px;");
                        btn.classList.add(answers[i].replace(/\s/g, ''));
                        
                    
                         //Alert correct or wrong
                        if (element === correctAnswer2) {
                            response.textContent = ("Correct!");
                            answerButtons.appendChild(line);
                            answerButtons.appendChild(response);
                        }

                        else {
                            response.textContent = ("Wrong!");
                            answerButtons.appendChild(line);
                            answerButtons.appendChild(response);
                            timeLeft = (timeLeft - 10);
                        }

                        //Make the third question answer buttons clickable
                        btn.addEventListener("click",function(event){
                            var element = event.target;
                            var correctAnswer3 = document.querySelector(".alloftheabove");

                            // Ask fourth question
                            question.innerHTML = "String values must be enclosed within ____ when being assigned to variables.";
                            question.style.textAlign = "left";

                            // Add the fourth question answer options  
                            var answers = ["commas", "curly brackets", "quotes", "parentheses"];
                            answerButtons.innerHTML = "";

                            //Turn the fourth answer options into buttons
                            for (i = 0; i< answers.length; i++) {
                                var btn = document.createElement("button");
                                btn.textContent = ([i+1]+ ". " + answers[i]);
                                answerButtons.appendChild(btn);
                                btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left; width: 250px;");
                                btn.classList.add(answers[i].replace(/\s/g, ''));
                                                        
                                //Alert correct or wrong
                                if (element === correctAnswer3) {
                                    response.textContent = ("Correct!");
                                    answerButtons.appendChild(line);
                                    answerButtons.appendChild(response);
                                }

                                else {
                                    response.textContent = ("Wrong!");
                                    answerButtons.appendChild(line);
                                    answerButtons.appendChild(response);
                                    timeLeft = (timeLeft - 10);
                                }

                                //Make the fourth question answer buttons clickable      
                                btn.addEventListener("click",function(event){
                                    var element = event.target;
                                    var correctAnswer4 = document.querySelector(".quotes");
                                    console.log(correctAnswer4);

        
                                    // Ask fifth question
                                    question.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
                                    question.style.textAlign = "left";
        
                                    // Add the fifth question answer options  
                                    var answers = ["JavaScript", "terminal / bash", "for loops", "console.log"];
                                    answerButtons.innerHTML = "";

                                    //Turn the fifth answer options into buttons
                                    for (i = 0; i< answers.length; i++) {
                                        var btn = document.createElement("button");
                                        btn.textContent = ([i+1]+ ". " + answers[i]);
                                        answerButtons.appendChild(btn);
                                        btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left; width: 250px;");
                                        btn.classList.add(answers[i].replace(/\s/g, ''));
                                        console.log(btn);
                                                
                                        //Alert correct or wrong
                                        if (element === correctAnswer4) {
                                            response.textContent = ("Correct!");
                                            answerButtons.appendChild(line);
                                            answerButtons.appendChild(response);
                                        }
                
                                        else {
                                            response.textContent = ("Wrong!");
                                            answerButtons.appendChild(line);
                                            answerButtons.appendChild(response);
                                            timeLeft = (timeLeft - 10);
                                        }

                                        //Make the fourth question answer buttons clickable 
                                        btn.addEventListener("click",function(event){
                                            var element = event.target;
                                            var correctAnswer5 = document.querySelector(".console\\.log");

                                            // Add results screen
                                            clearInterval(quizTimer);
                                            console.log(quizTimer);
                                            timer.textContent = "Time: 0";
                                            question.innerHTML = "All done!";
                                            question.style.textAlign = "left";
                                            answerButtons.innerHTML = "";
                                            answerButtons.style.textAlign = "left";

                                            //Stop the timer
                                            if(question === "All done!" || timeLeft === 0) {
                                                clearInterval(quizTimer);
                                            }
                                            
                                            var result = document.createElement("div");
                                            var instruction = document.createElement("div");
                                            var initialsInput = document.createElement("input");
                                            var initialsSubmit = document.createElement("button");

                                            answerButtons.appendChild(result);
                                            result.style.paddingBottom = "30px";
                                            answerButtons.appendChild(instruction);
                                            instruction.textContent = "Enter initials:    ";
                                            instruction.appendChild(initialsInput);
                                            initialsInput.style.marginBottom = "30px";
                                            instruction.appendChild(initialsSubmit);
                                            initialsSubmit.textContent = "Submit";
                                            initialsSubmit.setAttribute("style","margin-bottom: 30px; margin-left: 20px;");

                                            //Alert correct or wrong
                                            if (element === correctAnswer5) {
                                                response.textContent = ("Correct!");
                                                answerButtons.appendChild(line);
                                                answerButtons.appendChild(response);
                                                result.textContent = ("Your final score is " + timeLeft + ".");
                                            }
                    
                                            else {
                                                response.textContent = ("Wrong!");
                                                answerButtons.appendChild(line);
                                                answerButtons.appendChild(response);
                                                timeLeft = (timeLeft - 10);
                                                result.textContent = ("Your final score is " + timeLeft + ".");
                                            }

                                            //Remove corrector wrong alert 
                                            setTimeout(() => {
                                                response.textContent = "";
                                                line.style.display = "none";
                                                
                                            }, 1000);

                                            //Input and store the result
                                            var initials = [];

                                            if (JSON.parse(localStorage.getItem("scores")) !== null) {
                                                initials = JSON.parse(localStorage.getItem("scores"));
                                            }

                                            initialsSubmit.addEventListener("click", function() {
                                                initials.push(initialsInput.value + " - " + timeLeft);
                                                initialsInput.value = "";
                                                localStorage.setItem("scores", JSON.stringify(initials));
                                                
                                            })
                                        })    
                                    }
                                })
                                
                            }        
                        })

                    }    
                })   
            } 
                    
        });    
    }

});



