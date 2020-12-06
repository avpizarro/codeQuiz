var startBtn = document.querySelector(".start");
var timer = document.querySelector(".timer");
var question = document.querySelector("h1");
var answerButtons = document.querySelector(".answerButtons");
console.log(answerButtons);
var line = document.createElement("hr");
var response = document.createElement("div");
response.setAttribute("style", "text-align: left; font-style: italic; color: rgb(151, 149, 149);");


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

    //Add a button for each first question answer option
    for (i = 0; i< answers.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = ([i+1]+ ". " + answers[i]);
        answerButtons.appendChild(btn);
        btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left;");
        btn.classList.add(answers[i]);
        console.log(btn);
    
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

                /*var line = document.createElement("hr");
                answerButtons.appendChild(line);
                var response = document.createElement("div");
                response.setAttribute("style", "text-align: left; font-style: italic; color: rgb(151, 149, 149);");*/

                if (element === correctAnswer1) {
                    response.textContent = ("Correct!");
                    answerButtons.appendChild(line);
                    answerButtons.appendChild(response);
                }

                else {
                    response.textContent = ("Wrong!");
                    answerButtons.appendChild(line);
                    answerButtons.appendChild(response);
                }

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
                        
                    

                        if (element === correctAnswer2) {
                            response.textContent = ("Correct!");
                            answerButtons.appendChild(line);
                            answerButtons.appendChild(response);
                        }

                        else {
                            response.textContent = ("Wrong!");
                            answerButtons.appendChild(line);
                            answerButtons.appendChild(response);
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


                            answerButtons.innerHTML = "";

                            //Turn the third answer options into buttons
                            for (i = 0; i< answers.length; i++) {
                                var btn = document.createElement("button");
                                btn.textContent = ([i+1]+ ". " + answers[i]);
                                answerButtons.appendChild(btn);
                                btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left; width: 250px;");
                                btn.classList.add(answers[i].replace(/\s/g, ''));
                                                        

                                if (element === correctAnswer3) {
                                    response.textContent = ("Correct!");
                                    answerButtons.appendChild(line);
                                    answerButtons.appendChild(response);
                                }

                                else {
                                    response.textContent = ("Wrong!");
                                    answerButtons.appendChild(line);
                                    answerButtons.appendChild(response);
                                }

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


                                    for (i = 0; i< answers.length; i++) {
                                        var btn = document.createElement("button");
                                        btn.textContent = ([i+1]+ ". " + answers[i]);
                                        answerButtons.appendChild(btn);
                                        btn.setAttribute("style", "float: left; margin-right: 90%; margin-top: 5px; margin-bottom: 5px; text-align: left; width: 250px;");
                                        btn.classList.add(answers[i].replace(/\s/g, ''));
                                        console.log(btn);
                                                
                                        if (element === correctAnswer4) {
                                            response.textContent = ("Correct!");
                                            answerButtons.appendChild(line);
                                            answerButtons.appendChild(response);
                                        }
                
                                        else {
                                            response.textContent = ("Wrong!");
                                            answerButtons.appendChild(line);
                                            answerButtons.appendChild(response);
                                        }

                                        btn.addEventListener("click",function(event){
                                            var element = event.target;
                                            var correctAnswer5 = document.querySelector(".console\\.log");
                                            console.log(correctAnswer5);


                                            // Add results screen
                                            question.innerHTML = "All done!";
                                            question.style.textAlign = "left";
                                            answerButtons.innerHTML = "";
                                            answerButtons.style.textAlign = "left";


                                            var result = document.createElement("div");
                                            var instruction = document.createElement("div");
                                            var initialsInput = document.createElement("input");
                                            var initialsSubmit = document.createElement("button");

                                            answerButtons.appendChild(result);
                                            result.textContent = ("Your final score is " + timeLeft + ".");
                                            result.style.paddingBottom = "30px";
                                            answerButtons.appendChild(instruction);
                                            instruction.textContent = "Enter initials:  ";
                                            instruction.appendChild(initialsInput);
                                            initialsInput.style.marginBottom = "30px";
                                            instruction.appendChild(initialsSubmit);
                                            initialsSubmit.textContent = "Submit";
                                            initialsSubmit.style.marginBottom = "30px";

                                            var line = document.createElement("hr");
                                            answerButtons.appendChild(line);

                                            if (element === correctAnswer5) {
                                                response.textContent = ("Correct!");
                                                answerButtons.appendChild(line);
                                                answerButtons.appendChild(response);
                                            }
                    
                                            else {
                                                response.textContent = ("Wrong!");
                                                answerButtons.appendChild(line);
                                                answerButtons.appendChild(response);
                                            }
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



