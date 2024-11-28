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
    
// event listener for nextQuestionButton
document.getElementById('nextButton').addEventListener("click",nextQuestion);

// displays the next question
function nextQuestion(){
    qnum++;
    buildQuiz();
    feedbackElement.innerText = "";
}

// submit answer
function submitAnswer(e){
    // check if userAnswer matches correctAnswer in quizQuestions array
    const answerElement = e.currentTarget;
    let answer = answerElement.getAttribute('data-value');
    //let userAnswer = document.querySelector('input[type="radio"]:checked');
    if (answer) {
        if (answer === quizQuestions[qnum].correctAnswer) {
            // change button color to green with white text, move to CSS later
            answerElement.style.backgroundColor = "#206537";
            answerElement.style.color = "#ffffff";
            correctNum++;
            score = Math.round((correctNum / (correctNum + incorrectNum)) * 100);
            // display correct feedback
            feedbackElement.innerText = "Correct! Well done!";
        } else {
            // change button color to green with white text, move to CSS later
            answerElement.style.backgroundColor = "#710005";
            answerElement.style.color = "#ffffff";
            incorrectNum++;
            // display incorrect feedback
            feedbackElement.innerText = quizQuestions[qnum].incorrectFeedback;

        }
    } else {
        // handle case where no answer is selected
        feedbackElement.innerText = "Please select an answer";
    }
    // display score
    console.log(score);
    
}

// build the quiz page for a specific question in the quizQuestions array
function buildQuiz(){
    // add question number (= qnum index+1) to Quiz page
    let questionNumberSpan = document.querySelectorAll('questionNum');
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