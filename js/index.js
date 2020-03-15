(function () {
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
        }
    ];

    function buildQuiz() {
        const output = [];
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for (letter in currentQuestion.answers) {
                    answers.push(
                        `<label>
                          <input type="radio" name="question${questionNumber}" value="${letter}">
                          ${letter} :
                          ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
                output.push(
                    `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
                );
            });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = "lightgreen";

            } else {
                answerContainers[questionNumber].style.color = "red";

            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }


    //Variables
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;




    //Show the first slide
    showSlide(0);

    //Event listeners
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();