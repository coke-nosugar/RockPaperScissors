function getRandomMove () {
    var rps = ["rock", "paper", "scissors"]
    var randomMove = rps[Math.floor(Math.random() * rps.length)];
    console.log(randomMove)
    return randomMove
}

function getUserMove () {
    var randomMove = getRandomMove();
    var userMove;
    document.addEventListener('click', function(e){   
        if(e.target.id === 'rockButton'){
            //alert("Rock button clicked.") 
            //console.log(e.target.id);
            userMove = "rock"
            console.log(userMove)
            if (userMove === randomMove) {
                document.getElementById("computersChoice").innerHTML = "The computer chose rock."
                document.getElementById("resultPlaceholder").innerHTML = "We have a tie!"
            } else if (randomMove === "scissors") {
                document.getElementById("computersChoice").innerHTML = "The computer chose scissors."
                document.getElementById("resultPlaceholder").innerHTML = "You win!"
            } else if (randomMove === "paper") {
                document.getElementById("computersChoice").innerHTML = "The computer chose paper."
                document.getElementById("resultPlaceholder").innerHTML = "You lose!"
            } else {
                document.getElementById("resultPlaceholder").innerHTML = "Invalid input."
            }
    }})
    document.addEventListener('click', function(e){   
        if(e.target.id === 'paperButton'){
            //alert("Paper button clicked.") 
            //console.log(e.target.id); 
            userMove = "paper"
            console.log(userMove)
            if (userMove === randomMove) {
                document.getElementById("computersChoice").innerHTML = "The computer chose paper."
                document.getElementById("resultPlaceholder").innerHTML = "We have a tie!"
            } else if (randomMove === "rock") {
                document.getElementById("computersChoice").innerHTML = "The computer chose rock."
                document.getElementById("resultPlaceholder").innerHTML = "You win!"
            } else if (randomMove === "scissors") {
                document.getElementById("computersChoice").innerHTML = "The computer chose scissors."
                document.getElementById("resultPlaceholder").innerHTML = "You lose!"
            } else {
                document.getElementById("resultPlaceholder").innerHTML = "Invalid input"
            }
    }})
    document.addEventListener('click', function(e){   
        if(e.target.id === 'scissorsButton'){
            //alert("Scissors button clicked.") 
            //console.log(e.target.id); 
            userMove = "scissors"
            console.log(userMove);
            if (userMove === randomMove) {
                document.getElementById("computersChoice").innerHTML = "The computer chose scissors."
                document.getElementById("resultPlaceholder").innerHTML = "We have a tie!"
            } else if (randomMove === "paper") {
                document.getElementById("computersChoice").innerHTML = "The computer chose paper."
                document.getElementById("resultPlaceholder").innerHTML = "You win!"
            } else if (randomMove === "rock") {
                document.getElementById("computersChoice").innerHTML = "The computer chose rock."
                document.getElementById("resultPlaceholder").innerHTML = "You lose!"
            } else {
                document.getElementById("resultPlaceholder").innerHTML = "Invalid input."
            }
    }
})}

function resetGame () {
    var computersChoice = document.getElementById("computersChoice")
    computersChoice.innerHTML = ""
    var resultPlaceholder = document.getElementById("resultPlaceholder")
    resultPlaceholder.innerHTML = ""
    init()
}

function init () {
    getUserMove()
    const resetButton = document.getElementById("resetButton")
    resetButton.addEventListener('click', resetGame);
}

window.onload = init;