import { quizQuestions } from './questionbank.js';

document.addEventListener('DOMContentLoaded', function () {
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
    
// event listener for nextQuestionButton
document.getElementById('nextButton').addEventListener("click",nextQuestion);

// displays the next question
function nextQuestion(){
    if (totalAnswered < quizLength-1) {
        qnum++;
        buildQuiz();
        feedbackElement.innerText = "";
        ++totalAnswered;
    } else {
        showResults();
    }
}

function clearAnswer(){
    let correctAnswerElements = document.querySelectorAll('.btn-success');
    correctAnswerElements.forEach(element => {
        element.classList.add('btn-light-blue');
        element.classList.remove('btn-success');
    });
    let incorrectAnswerElements = document.querySelectorAll('.btn-danger');
    incorrectAnswerElements.forEach(element => {
        
        element.classList.add('btn-light-blue');
        element.classList.remove('btn-danger');
    });
}

// submit answer
function submitAnswer(e){
    clearAnswer();
    const answerElement = e.currentTarget;
    let answer = answerElement.getAttribute('data-value');
    // check if userAnswer matches correctAnswer in quizQuestions array
    if (answer) {
        if (answer === quizQuestions[qnum].correctAnswer) {
            // change button color to green with white text, move to CSS later
            answerElement.classList.add('btn-success');
            answerElement.classList.remove('btn-light-blue');
            correctNum++;
            score = Math.round((correctNum / totalAnswered) * 100);
            console.log(score);
            // display correct feedback
            feedbackElement.innerText = "Correct! Well done!";
        } else {
            // change button color to red with white text, move to CSS later
            answerElement.classList.add('btn-danger');
            answerElement.classList.remove('btn-light-blue');
            incorrectNum++;
            // display incorrect feedback
            feedbackElement.innerText = quizQuestions[qnum].incorrectFeedback;

        }
    } else {
        // handle case where no answer is selected
        feedbackElement.innerText = "Please select an answer";
    }
    
}

// build the results page
function showResults(){
    let resultsElement = document.getElementById('questionArea');
    const comments = [
        "<strong>You are a True Brit at Heart!</strong> Fantastic job passing your Life in the UK test! Your understanding of British life and culture is impressive. Welcome to your new home!",
        "<strong>You are a UK Citizen Extraordinaire!</strong> You know your fish and chips from your chicken tikka, keep practising! Your commitment are truly commendable. Welcome to the UK family!", 
        "<strong>You are a Proud Brit!</strong> Don't worry! It's hard work studying for this exam, but keep going and your hard work and dedication will pay off. Welcome to this wonderful country!"
    ];
    const animgifURLs = [
        "https://giphy.com/embed/1yjZXySg7tSohpcmUM", 
        "https://giphy.com/embed/3owypnv1Med6YoCbcs", 
        "https://giphy.com/embed/3oEjI1TncWUr0Xth96"
    ];

    const gifURLs = [
        "https://giphy.com/gifs/queen-we-are-the-champions-1yjZXySg7tSohpcmUM", 
        "https://giphy.com/gifs/nike-mo-unlimited-justdoit-3owypnv1Med6YoCbcs", 
        "https://giphy.com/gifs/pbs-great-british-baking-show-bake-off-gbbo-3oEjI1TncWUr0Xth96"
    ];
        const gifAlts = [
        "We are the champions by Queen", 
        "Mo Farah running non-stop", 
        "Great British Bake Off Mary Berry saying, 'Soggy Bottom'"
    ];
    let comment = "";
    let animgifURL = "";
    let gifURL = "";
    let gifAlt = "";
    if (score >= 80) {
        comment = comments[0];
        animgifURL = animgifURLs[0];
        gifURL = gifURLs[0];
        gifAlt = gifAlts[0];
    } else if (score >= 50) {
        comment = comments[1];
        animgifURL = animgifURLs[1];
        gifURL = gifURLs[1];
        gifAlt = gifAlts[1];
    } else {
        comment = comments[2];
        animgifURL = animgifURLs[2];
        gifURL = gifURLs[2];
        gifAlt = gifAlts[2];
    }
    resultsElement.innerHTML = `<h2>Results</h2>
    <div class="row justify-content-center">
            <div class="col-12 col-md-6 mb-2">
                <h4>You answered ${correctNum} questions correctly and ${incorrectNum} questions incorrectly.</h4>
                <h4>Your score is ${score}%.</h4>
                <h5 class="results-text">"${comment}</h5>
            </div>
            <div class="col-12 col-md-6">
                <div style="width:100%;height:0;padding-bottom:56%;">
            <iframe src="${animgifURL}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen>
            </iframe>
            </div>
            <p><a href="${gifURL} alt="${gifAlt}">via GIPHY</a></p>
            </div>
        </div>
        
        
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 mb-2">
                <a href="categories.html" class="btn btn-primary btn-block">Play Again</a>
            </div>
            <div class="col-12 col-md-4 mb-2">
                <a href="index.html" class="btn btn-primary btn-block">Home</a>
            </div>
            <div class="col-12 col-md-4 mb-2">
                <a href="categories.html" class="btn btn-primary btn-block">Categories</a>
            </div>
        </div>
    `;
}

// build the quiz page for a specific question in the quizQuestions array
function buildQuiz(){
    // add question number (= qnum index+1) to Quiz page
    let questionNumberSpan = document.querySelectorAll('.questionNum');
    for (let q of questionNumberSpan) {
        q.innerText = parseInt(qnum+1);
    }
    // add question text to Quiz page
    let questionTextElement = document.getElementById('questionText');
    questionTextElement.innerText = quizQuestions[qnum].question;
    // add question image and alt tag to Quiz page
    let imageElement = document.getElementById('questionImage');
    imageElement.src = quizQuestions[qnum].imageURL;
    imageElement.alt = quizQuestions[qnum].imageAlt;
    imageElement.width = "300"; //move width setting to css
    // add answer options to Quiz page
    let options = quizQuestions[qnum].options;
    let optionsArray = Object.keys(options);
    let optionSetDiv = document.getElementById('optionSet');
    let optionSet = "";
    for (let option of optionsArray) {
        optionSet += `<a href='#' type='button' class='btn btn-light-blue btn-block optionButton' data-value='${option}'>${option}) ${options[option]}</a>`;
    }
    optionSetDiv.innerHTML = optionSet;
    // add event listener to option buttons
    let optionButtons = document.querySelectorAll('.optionButton');
    for (let button of optionButtons) {
        button.addEventListener('click', submitAnswer); 
        }
    }
    

    buildQuiz();
});