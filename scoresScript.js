var goBackBtn = document.querySelector(".goBack");
var scoresList = document.querySelector(".scoresList");
var clearBtn = document.querySelector(".clear");

// Click to go back to the begining
goBackBtn.addEventListener("click", function() {
    document.location.href = "index.html";
})

// Clear the scores list
clearBtn.addEventListener("click", function(){
    localStorage.removeItem("scores");
    scoresList.textContent = "";
})

enteredScores = [];

init();

// Set a function to display the scores list
function renderScores() {
  
    // Render a new li for each score
    for (var i = 0; i < enteredScores.length; i++) {
      var renderScore = enteredScores[i];
  
      var li = document.createElement("li");
      li.textContent = renderScore;
      scoresList.appendChild(li);
      li.setAttribute("style", "background: rgb(241, 232, 250);margin-top: 5px; margin-bottom: 5px; height: 2em;line-height: 2em");
      scoresList.setAttribute("style", "list-style-type: decimal; list-style-position: inside;");
    }
}

// Set a function to recover the stored scores so they can be displayed
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) { 
    enteredScores = storedScores;  
    }
}

renderScores();

