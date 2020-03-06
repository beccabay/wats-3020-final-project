function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
         ${currentQuestion.answers[letter]}
        </label>`
                );
            }
            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}
myQuestions.forEach((currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here
});
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {

    // ...add an html radio button
    answers.push(
        `<label>
  <input type="radio" name="question${questionNumber}" value="${letter}">
  ${letter} :
  ${currentQuestion.answers[letter]}
</label>`
    );
}
// add this question and its answers to the output
output.push(
    `<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');


function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [{
        question: "Braun Strowman",
        answers: {
            a: "Leg Drop",
            b: "Chokeslam",
            c: "Running Power Slam",
            d: "Sister Abigail"
        },
        correctAnswer: "c"
    },
    {
        question: "Bret Hart",
        answers: {
            a: "Sharp Shooter",
            b: "Superman Punch",
            c: "Rock Bottom",
            d: "Suplex"
        },
        correctAnswer: "a"
    },
    {
        question: "Randy Orton",
        answers: {
            a: "Jackhammer",
            b: "RKO",
            c: "Killswitch",
            d: "Spear"
        },
        correctAnswer: "b"
    },
    {
        question: "Undertaker",
        answers: {
            a: "Leg Drop",
            b: "Attitude Adjustment",
            c: "Code Breaker",
            d: "Tombstone Piledriver"
        },
        correctAnswer: "d"
    },
    {
        question: "Drew McIntyer",
        answers: {
            a: "Sweet Chin Music",
            b: "People's Elbow",
            c: "Claymore Kick",
            d: "Flying Elbow"
        },
        correctAnswer: "c"
    },
    {
        question: "Brock Lesnar",
        answers: {
            a: "Clothesline",
            b: "619",
            c: "F5",
            d: "Mandible Claw"
        },
        correctAnswer: "c"
    },
    {
        question: "Rey Mysterio",
        answers: {
            a: "F5",
            b: "619",
            c: "Spear",
            d: "Suplex"
        },
        correctAnswer: "b"
    },
    {
        question: "Kane",
        answers: {
            a: "Chokeslam",
            b: "Rock Bottom",
            c: "Code Breaker",
            d: "Mandible Claw"
        },
        correctAnswer: "a"
    },
    {
        question: "Steve Austen",
        answers: {
            a: "Superman Punch",
            b: "Spear",
            c: "Stunner",
            d: "Leg Drop"
        },
        correctAnswer: "c"
    },
    {
        question: "Becky Lynch",
        answers: {
            a: "Sharp Shooter",
            b: "Disarm Her",
            c: "Attitude Adjustment",
            d: "Sister Abigail"
        },
        correctAnswer: "b"
    },
    {
        question: "Samoa Joe",
        answers: {
            a: "Flying Elbow",
            b: "Code Breaker",
            c: "Leg Drop",
            d: "Coquina Clutch"
        },
        correctAnswer: "d"
    },
    {
        question: "Viking Raiders",
        answers: {
            a: "Killswitch",
            b: "Viking Experience",
            c: "Bank Statement",
            d: "Attitude Adjustment"
        },
        correctAnswer: "b"
    },
    {
        question: "Kofi Kingston",
        answers: {
            a: "Touble in Paradise",
            b: "People's Elbow",
            c: "Jackhammer",
            d: "Chokeslam"
        },
        correctAnswer: "a"
    },
    {
        question: "Big E",
        answers: {
            a: "Leg Drop",
            b: "Mandible Claw",
            c: "Big Ending",
            d: "Code Breaker"
        },
        correctAnswer: "c"
    },
    {
        question: "Revival",
        answers: {
            a: "Chokeslam",
            b: "Shatter Machine",
            c: "Leg Drop",
            d: "Rock Bottom"
        },
        correctAnswer: "b"
    },
];

// display quiz right away
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

showSlide(currentSlide);

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// on submit, show results
submitButton.addEventListener('click', showResults);