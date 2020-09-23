var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var startButton = document.querySelector("#start-btn");
var ButtonA = document.querySelector("#A");
var ButtonB = document.querySelector("#B");
var ButtonC = document.querySelector("#C");
var ButtonD = document.querySelector("#D");
var Question = document.querySelector("#Q");


var totalSeconds = 300;
var interval;
var fakequestions = [{
    A: "Answer A",
    B: "Answer B",
    C: "Answer C",
    D: "Answer D",
    Q: "ABCD",
},]; 

function setTime() {
    clearInterval(interval)

}

function getFormattedMinutes() {
    var secondsLeft = totalSeconds;

    var minutesLeft = Math.floor(secondsLeft / 60);

    var formattedMinutes;


    formattedMinutes = minutesLeft;


    return formattedMinutes;
}

function getFormattedSeconds() {
    var secondsLeft = (totalSeconds) % 60;

    var formattedSeconds;

    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }

    return formattedSeconds;
}


function renderTime() {
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
    if (totalSeconds <= 0) {
        stopTimer()
    }

}

function startTimer() {
    setTime();

    interval = setInterval(function () {
        totalSeconds--;
        renderTime();
    }, 1000);
}

function stopTimer() {
    totalSeconds = 300;
    setTime();
    renderTime();
}

function renderquestion(question) {
    ButtonA.textContent = question.A;
    ButtonB.textContent = question.B;
    ButtonC.textContent = question.C;
    ButtonD.textContent = question.D;
    Question.textContent = question.Q;
}

function startgame() {
    startTimer();
    for(var i = 0; i < fakequestions.length; i++){
        var question = fakequestions[i]
        renderquestion(question)
    }
    
}

startButton.addEventListener("click", startgame);



