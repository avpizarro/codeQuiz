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

function renderScores() {
  
    // Render a new li for each score
    for (var i = 0; i < enteredScores.length; i++) {
      var renderScore = enteredScores[i];
  
      var li = document.createElement("li");
      li.textContent = renderScore;
      scoresList.appendChild(li);
    }
}

function init() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) { 
    enteredScores = storedScores;  
    }
}

renderScores();

console.log(enteredScores);
console.log(scoresList);

