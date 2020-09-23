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
// Array and Object for code questions.
var questions = [{
    Q: "Which dinosaur is classified as a carnivore?",
    A: "Brontosaurus",
    B: "Triceratops",
    C: "T-Rex",
    D: "Your pet cat",
}, 
{
    Q: "When did dinosaurs go extinct?",
    A: "Yesterday",
    B: "Last week",
    C: "65 million years ago",
    D: "1000 years ago",
},
{
    Q: "On which continent have the most dinosaur fossils been found?",
    A: "North America",
    B: "Africa",
    C: "Asia",
    D: "Hawaii",
},
{
    Q: "How did Stegosaurus protect itself from enemies?",
    A: "Ran away",
    B: "Stomped on them",
    C: "Smacked them with its spiky tail",
    D: "Bit them",
},
{
    Q: "If a T-Rex were chasing you across a field, how could you outrun this predator?",
    A: "Call an uber",
    B: "By walking",
    C: "By riding a skateboard",
    D: "By zooming away on a motorized scooter",
}
]; 

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
    for(var i = 0; i < questions.length; i++){
        var question = questions[i]
        renderquestion(question)
    }
    
}

startButton.addEventListener("click", startgame);



