// create global objects
var questions = [
    {
        question: "A person who’s a fysigunkus lacks what?",
        options: ["Humor", "Wisdom", "Curiosity", "Temper"],
        correctAnswer: "Curiosity",
        image: "./assets/images/giphy.gif",
        image2: "./assets/images/giphy(1).gif"
    },
    {
        question: "What does psithurism describe the sound of?",
        options: ["Flowing water", "Rustling leaves", "Keyboard typing", "Hammer nailing"],
        correctAnswer: "Rustling leaves",
        image: "./assets/images/giphy.gif",
        image2: "./assets/images/giphy(1).gif"
    },
    {
        question: "What is a wheeple?",
        options: ["A poor attempt at whistling", "A poor attempt at listening", "A poor attempt at sneezing", "A poor attempt at hugging"],
        correctAnswer: "A poor attempt at whistling",
        image: "./assets/images/giphy.gif",
        image2: "./assets/images/giphy(1).gif"
    },
    {
        question: "What’s limerance the initial thrill of?",
        options: ["Getting a job", "Falling in love", "Learning to write", "Buying a house"],
        correctAnswer: "Falling in love",
        image: "./assets/images/giphy.gif",
        image2: "./assets/images/giphy(1).gif"
    },
    {
        question: "What’s another word for chirotonsor?",
        options: ["A masseur", "A carpenter", "A barber", "A dentist"],
        correctAnswer: "A barber",
        image: "./assets/images/giphy.gif",
        image2: "./assets/images/giphy(1).gif"
    },
    {
        question: "What do you love eating as a pagophagiac",
        options: ["Fingernails", "Ash", "Pips", "Ice"],
        correctAnswer: "Ice",
        image: "./assets/images/giphy.gif",
        image2: "./assets/images/giphy(1).gif"
    },
    {
        question: "When you’re a stagiary, what are you a student of?",
        options: ["Medicine", "Law", "Geology", "Philosophy"],
        correctAnswer: "Law",
        image: "./assets/images/giphy.gif",
        image2: "./assets/images/giphy(1).gif"
    },
    {
        question: "Presbycusis is the loss of what at old age?",
        options: ["Smelling", "Hearing", "Tasting", "Feeling"],
        correctAnswer: "Hearing",
        image: "./assets/images/giphy.gif",
        image2: "./assets/images/giphy(1).gif"
    }
];

var currentQuestion = 0,
    counter = 30,
    correct = 0,
    incorrect = 0,
    timer;

// count down timer
function countdown() {
    counter--;

    $("#countDownNumber").text(counter);
    if (counter === 0) {
        timeUp();
    }
}



// disply questions 
function loadQuestion() {

    timer = setInterval(countdown, 1000);

    $('#sub-wrapper').html("<h3>Time Remaining: <span id='countDownNumber'>30</span> Seconds</h3>" + "<h3>" + questions[currentQuestion].question + "</h3>");

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        $('#sub-wrapper').append("<button class='answer-button' data-name='" + questions[currentQuestion].options[i]
            + "'>" + questions[currentQuestion].options[i] + "</button>");
    }

}


// change to next question after answered 
function nextQuestion() {
    counter = 30;
    $("#countDownNumber").text(counter);
    currentQuestion++;
    loadQuestion();
}


function timeUp() {

    clearInterval(timer);

    $("#countDownNumber").text(counter);

    $('#sub-wrapper').html("<h3>Out of Time!</h3>");
    $('#sub-wrapper').append("<h3>The Correct Answer was: " + questions[currentQuestion].correctAnswer);
    $('#sub-wrapper').append("<img src='" + questions[currentQuestion].image + "' />");

    if (currentQuestion === questions.length - 1) {
        setTimeout(results, 3000);
    }
    else {
        setTimeout(nextQuestion, 3000);
    }
}


function results() {

    clearInterval(timer);

    $('#sub-wrapper').html("<h3>Here's your result</h3>");

    $("#countDownNumber").text(counter);

    $('#sub-wrapper').append("<h3>Correct Answers: " + correct + "</h3>");
    $('#sub-wrapper').append("<h3>Incorrect Answers: " + incorrect + "</h3>");
    $('#sub-wrapper').append("<h3>Unanswered: " + (questions.length - (incorrect + correct)) + "</h3>");
    $('#sub-wrapper').append("<br><button id='start-over'>Start Over?</button>");
}


function clicked(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[currentQuestion].correctAnswer) {
        answeredCorrectly();
    }
    else {
        answeredIncorrectly();
    }
}


function answeredIncorrectly() {

    incorrect++;

    clearInterval(timer);

    $('#sub-wrapper').html("<h3>Nope!</h3>");
    $('#sub-wrapper').append("<h3>The Correct Answer was: " + questions[currentQuestion].correctAnswer + "</h3>");
    $('#sub-wrapper').append("<img src='" + questions[currentQuestion].image2 + "' />");

    if (currentQuestion === questions.length - 1) {
        setTimeout(results, 3000);
    }
    else {
        setTimeout(nextQuestion, 3000);
    }
}

function answeredCorrectly() {

    clearInterval(timer);

    correct++;

    $('#sub-wrapper').html("<h3>Correct!</h3>");
    $('#sub-wrapper').append("<img src='" + questions[currentQuestion].image + "' />");

    if (currentQuestion === questions.length - 1) {
        setTimeout(results, 3000);
    }
    else {
        setTimeout(nextQuestion, 3000);
    }
}

function reset() {
    currentQuestion = 0;
    counter = 0;
    correct = 0;
    incorrect = 0;
    loadQuestion();
}



$(document).on("click", ".answer-button", function (e) {
    clicked(e);
});

$(document).on("click", "#start", function () {
    loadQuestion();

});