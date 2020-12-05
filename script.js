var startBtn = document.querySelector(".start");
var timer = document.querySelector(".timer");

startBtn.addEventListener("click", function(){

    var timeLeft = 75;
    var quizTimer = setInterval(function(){

        timeLeft--;
        timer.textContent = ("Time: " + timeLeft);
        if(timeLeft === 0)
            clearInterval(quizTimer)
        },1000); 
        console.log(timer);
        console.log(timeLeft);

})
