import { quizQuestions } from './questionbank.js'; // import quizQuestions array from questionbank.js
// set qnum to access index in quizQuestions array
let qnum = 0;
// set correctNum as number of questions answered correctly
let correctNum = 0;
// set incorrectNum as number of questions answered incorrectly
let incorrectNum = 0;
// set score as percentage of correct answers
let score = 0;
// set feedbackElement to display feedback to user
let feedbackElement = document.getElementById('feedback');
// set quizLength to number of questions per round
let quizLength = 10;
// set totalAnswered to number of questions answered
let totalAnswered = 0;
// set category to chosen category
let chosenCategory = localStorage.getItem('chosenCategory') || '';
// set quizQuestions array to one of the quizQuestions arrays
let questionSet = [];
// let quizQuestions = []; // default to geographyQuizQuestions
let answer = "";

// page load event listener
const app = {
    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
    },
    load: () => {
        app.getContent();
        chosenCategory = localStorage.getItem('chosenCategory');
        feedbackElement = document.getElementById('feedback');
    },
    // getContent decides which content to display by body#id
    getContent: () => {
        let bodyId = document.body.id;
        switch (bodyId) {
            case 'categories':
                app.displayCategoriesContent();
                break;
            case 'quiz':
                app.displayQuizContent();
                break;
            default:
                console.log("not caught" + bodyId);
                break;
        }
    },
    // displayQuizContent function to display content for categories page
    displayCategoriesContent: () => {
        app.buildCategories();
        // add event listener for category buttons
        const categoryButtons = document.querySelectorAll('.categoryBtn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', function (e) {
                let clickedCategory = e.currentTarget.id;
                // set quizQuestions array to one of the quizQuestions arrays
                if (clickedCategory === "historyButton") {
                    chosenCategory = "history";
                } else if (clickedCategory === "geographyButton") {
                    chosenCategory = "geography";
                } else if (clickedCategory === "lawButton") {
                    chosenCategory = "law";
                } else if (clickedCategory === "cultureButton") {
                    chosenCategory = "culture";
                }
                // set chosenCategory in localStorage
                localStorage.setItem('chosenCategory', chosenCategory);
                // reset qnum, correctNum, incorrectNum, score, totalAnswered
                qnum = 0;
                correctNum = 0;
                incorrectNum = 0;
                score = 0;
                totalAnswered = 0;
                // set quizLength to number of questions per round
                quizLength = 10;
            });
        });
    },
    // displayQuizContent function to display content for categories page
    displayQuizContent: () => {
        app.buildQuiz();
    },
    // build categories page
    buildCategories: () => {
        let categoriesElement = document.querySelector("#buttonArea");
        categoriesElement.innerHTML = "";
        categoriesElement.innerHTML = `<h3>Categories</h3><p>(Choose a category)</p><div class="row"><div class="col-12 col-md-6 mb-2"><!-- Bootstrap grid system used to create two columns, used Copilot -->
                <a href="quiz.html" id="historyButton" class="btn btn-light-blue btn-block categoryBtn" data-value="history"><i class="fa-solid fa-building-columns" style="width: 20px;"></i>History</a>
            </div><div class="col-12 col-md-6 mb-2"><a href="quiz.html" id="geographyButton" class="btn btn-light-blue btn-block categoryBtn" data-value="geography"><i class="fa-solid fa-globe" style="width: 20px;"></i>Geography</a>
            </div></div><div class="row"><div class="col-12 col-md-6 mb-2"><a href="quiz.html" id="lawButton" class="btn btn-light-blue btn-block categoryBtn" data-value="law"><i class="fa-solid fa-scale-balanced" style="width: 20px;"></i>Law and Society</a>
            </div><div class="col-12 col-md-6 mb-2"><a href="quiz.html" id="cultureButton" class="btn btn-light-blue btn-block categoryBtn" data-value="culture"><i class="fa-solid fa-masks-theater" style="width: 20px;"></i>Sports and Culture</a>
            </div>
        </div>
    </div>`;
    },

    // build the quiz page for a specific question in the quizQuestions array
    buildQuiz: () => {
        if (chosenCategory) {
            questionSet = fetchQuestionSet(chosenCategory);
        }
        updateQuiz(questionSet);
        // event listener for nextQuestionButton
        document.getElementById('nextButton').addEventListener("click", nextQuestion);
    }
};

// function to assign quizQuestions array based on chosen category
function fetchQuestionSet(chosenCategory) {
    let filteredQuestions = quizQuestions.filter(question => question.category === chosenCategory);
//    return shuffleArray(filteredQuestions).slice(0, quizLength);
   return filteredQuestions;
}

// function to use Fisher-Yates shuffle to shuffle quizQuestions array
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// show next button
function showNextButton(){
    let nextButton = document.querySelector('#nextButton i');
    if (nextButton) {
        nextButton.style.display = "inline";
    } else {
        console.error("showNextButton: nextButton element not found");
    }
}

// hide next button
function hideNextButton(){
    let nextButton = document.querySelector('#nextButton i');
    if (nextButton) {
        nextButton.style.display = "none";
    } else {
        console.error("hideNextButton: nextButton element not found");
    }
}

// displays the next question
function nextQuestion(){
    if (totalAnswered < quizLength) {
        qnum++;
        updateQuiz(questionSet);
        feedbackElement.innerText = "";
    } else {
        showResults();
    }
}

function updateQuiz(questionSet) {
    // check if questionSet is empty or undefined
    if (!questionSet || questionSet.length === 0) {
        console.error("updateQuiz: questionSet is empty or undefined");
        return;
    }
    if (qnum < 0 || qnum >= questionSet.length) {
        console.error("updateQuiz: qnum is out of bounds");
        return;
    }
    // add question number (= qnum index+1) to Quiz page
    let questionCounterElement = document.querySelector('#questionCounter');
    let questionNumber = parseInt(qnum + 1);
    questionCounterElement.innerHTML = `<span>Question <span class="questionNum">${questionNumber}</span> of <span id="quizLength">${quizLength}</span></span>`;
    // add question number (= qnum index+1) to Quiz page
    let questionCountElement = document.querySelector('.questionNum');
    questionCountElement.innerText = `${questionNumber}`;
    hideNextButton();
    // add question text to Quiz page
    let questionTextElement = document.getElementById('questionText');
    questionTextElement.innerText = questionSet[qnum].question;
    // hides feedback on Quiz page
    let feedbackElement = document.getElementById('feedback');
    feedbackElement.style.display = "none";
    // add question image and alt tag to Quiz page
    let imageElement = document.getElementById('questionImage');
    imageElement.src = questionSet[qnum].imageURL;
    imageElement.alt = questionSet[qnum].imageAlt;
    //imageElement.width = "200"; //move width setting to css
    // add answer options to Quiz page
    let options = questionSet[qnum].options;
    let optionsArray = Object.keys(options);
    let optionSetDiv = document.getElementById('optionSet');
    let optionSet = optionsArray.map((option) => {
        return `
            <div class="col-12 col-md-6 mb-2">
                <button type='button' class='btn btn-secondary optionButton m-2' data-value='${option}'>
                    ${option}) ${options[option]}
                </button>
            </div>
        `;
    }).join('');
    optionSetDiv.innerHTML = `<div class="row mx-auto">${optionSet}</div>`;
    // add event listener to option buttons
    let optionButtons = document.querySelectorAll('.optionButton');
    for (let button of optionButtons) {
        button.addEventListener('click', submitAnswer);
    }
}

// clears answer highlights and feedback
function clearAnswer(){
    // change correct answer button color back to light blue
    let correctAnswerElements = document.querySelectorAll('.btn-success');
    correctAnswerElements.forEach(element => {
        element.classList.add('btn-secondary');
        element.classList.remove('btn-success');
    });
    // change incorrect answer button color back to light blue
    let incorrectAnswerElements = document.querySelectorAll('.btn-danger');
    incorrectAnswerElements.forEach(element => {
        element.classList.add('btn-secondary');
        element.classList.remove('btn-danger');
    });
    // clear feedback
    feedbackElement.innerText = "";
}

// calculate score
function calculateScore(){
    score = Math.round((correctNum / totalAnswered) * 100);
}

// submit answer
function submitAnswer(e){
    // increment totalAnswered
    totalAnswered++;
    // clear previous feedback
    clearAnswer();
    const answerElement = e.currentTarget;
    answer = answerElement.getAttribute('data-value');
    // check if userAnswer matches correctAnswer in quizQuestions array
    if (answer) {
        if (answer === questionSet[qnum].correctAnswer) {
            // change button color to green with white text
            answerElement.classList.add('btn-success');
            answerElement.classList.remove('btn-secondary');
            correctNum++;
            
            // display feedback for correct answer
            feedbackElement.innerText = "Correct! Well done!";
        } else {
            // change button color to red with white text
            answerElement.classList.add('btn-danger');
            answerElement.classList.remove('btn-secondary');
            incorrectNum++;
            
            // display feedback for incorrect answer
            feedbackElement.innerText = questionSet[qnum].incorrectFeedback;
        }
    } else {
        // handle case where no answer is selected
        feedbackElement.innerText = "Please select an answer";
    }
    // display feedback
    feedbackElement.style.display = "block";
    // disable option buttons
    document.querySelectorAll('.optionButton').forEach(button => {
        button.disabled = true;
    });
    
    showNextButton();
}

// builds the results page
function showResults(){
    let resultsElement = document.getElementById('questionArea');
    // calculate score
    calculateScore();
    // set comments and gifs for different score ranges
    const comments = [
        "<strong>You are a True Brit at Heart!</strong> Fantastic job passing your Life in the UK test! Your understanding of British life and culture is impressive. Welcome to your new home!",
        "<strong>You are a UK Citizen Extraordinaire!</strong> You know your fish and chips from your chicken tikka, keep practising! Your commitment are truly commendable. Welcome to the UK family!", 
        "<strong>You are a Proud Brit!</strong> Don't worry! It's hard work studying for this exam, but keep going and your hard work and dedication will pay off. Welcome to this wonderful country!"
    ];
    
    const gifURLs = [
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGR0bmd2N2xqbWdtNzNna2tmNmpuZHVpcWFyZ3plOXA2cW00cmpjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1yjZXySg7tSohpcmUM/giphy.webp", 
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm50NnJxZTMydHZ3djIxNWNlcjduYzN5NTV6bHR0bzRzZTVwajRlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3owypnv1Med6YoCbcs/giphy.webp", 
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWdrcm9zZG5zdTR0MG4yeXo2bjMxNmkwcHozdmF5M20xOTRvcnMzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI1TncWUr0Xth96/giphy.webp"
    ];
    const gifAlts = [
        "We are the champions by Queen", 
        "Mo Farah running non-stop", 
        "Great British Bake Off Mary Berry saying, 'Soggy Bottom'"
    ];
    let comment = "";
    let gifURL = "";
    let gifAlt = "";
    if (score >= 80) {
        comment = comments[0];
        gifURL = gifURLs[0];
        gifAlt = gifAlts[0];
    } else if (score >= 50) {
        comment = comments[1];
        gifURL = gifURLs[1];
        gifAlt = gifAlts[1];
    } else {
        comment = comments[2];
        gifURL = gifURLs[2];
        gifAlt = gifAlts[2];
    }
    // display results
    resultsElement.innerHTML = `<h2>Results</h2>
    <div class="row justify-content-center">
        <div class="col-12 col-md-6 mb-2">
            <p class="lead">Correct: ${correctNum}; incorrect: ${incorrectNum}. Your score is ${score}%.</p>
            <p class="lead results-text">${comment}</p>
        </div>
        <div id="feedbackImage" class="col-12 col-md-6"><img src="${gifURL}" alt="${gifAlt}" class="img-fluid"></div>    
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 mb-2 mt-auto">
                <a href="categories.html" class="btn btn-outline-secondary btn-block">Play Again</a>
            </div>
            <div class="col-12 col-md-4 mb-2 mt-auto">
                <a href="index.html" class="btn btn-outline-secondary btn-block">Home</a>
            </div>
            <div class="col-12 col-md-4 mb-2 mt-auto">
                <a href="categories.html" class="btn btn-outline-secondary btn-block">Categories</a>
            </div>
        </div>
    </div>
    `;
}

// call app.init function
app.init();
