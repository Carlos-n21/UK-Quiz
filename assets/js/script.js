import { historyQuizQuestions, geographyQuizQuestions, lawQuizQuestions, cultureQuizQuestions } from './questionbank.js'; // import quizQuestions array from questionbank.js
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
let quizLength = 40;
// set totalAnswered to number of questions answered
let totalAnswered = 0;
// set category to chosen category
let chosenCategory = localStorage.getItem('chosenCategory') || '';
// set quizQuestions array to one of the quizQuestions arrays
let questionSet = [];
let quizQuestions = []; // default to geographyQuizQuestions
let answer = "";

  // page load event listener
 const app = {
    init: () => {
        document.addEventListener('DOMContentLoaded', app.load);
        console.log("init");
    },
    load: () => {
        app.getContent();
        console.log("loaded");
        chosenCategory = localStorage.getItem('chosenCategory');
    },
    // getContent decides which content to display by body#id
    getContent: () =>{
        let bodyId = document.body.id;
        switch (bodyId) {
            case 'categories':
                app.displayCategoriesContent();
                break;
            case 'quiz':
                app.displayQuizContent();
                updateQuiz(questionSet);
                break;
            default:
                console.log("not caught" + bodyId);
                break;
        }
    },
    // displayQuizContent function to display content for categories page
    displayCategoriesContent:() =>{
        console.log("getContent: bodyId "+document.body.id);
        app.buildCategories();
            // add event listener for category buttons
        const categoryButtons = document.querySelectorAll('.categoryBtn');
        for (let button of categoryButtons) {
            button.addEventListener('click', function(e){
                console.log("EL target id"+e.currentTarget.id);
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
                console.log("Stored category: "+chosenCategory);
        //    // reset qnum, correctNum, incorrectNum, score, totalAnswered
           qnum = 0;
           correctNum = 0;
           incorrectNum = 0;
           score = 0;
           totalAnswered = 0;
           // set quizLength to number of questions per round
           quizLength = 40;
       });
    }
    },
    // displayQuizContent function to display content for categories page
    displayQuizContent:() => {
        console.log("getContent: bodyId "+document.body.id);
        console.log("start displayQuizContent: chosenCat: " +chosenCategory);
        
        app.buildQuiz();
    },
    // build categories page
    buildCategories:() => {
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
    buildQuiz:()=> {
        console.log("first build chosenCat: " +chosenCategory);
        if (chosenCategory) {
            fetchQuestionSet(chosenCategory);
        }updateQuiz(questionSet);
        // event listener for nextQuestionButton
    document.getElementById('nextButton').addEventListener("click",nextQuestion);
    }
    
    
};
// function to assign quizQuestions array based on chosen category
function fetchQuestionSet(chosenCategory){
    if (chosenCategory === "history") {
        questionSet = historyQuizQuestions;
    } else if (chosenCategory === "geography") {
        questionSet = geographyQuizQuestions;
    } else if (chosenCategory === "law") {
        questionSet = lawQuizQuestions;
    } else if (chosenCategory === "culture") {
        questionSet = cultureQuizQuestions;
    }
    console.log("fetchQuestionSet: assigned questions "+questionSet[0].question);
    return questionSet;
}


// show next button
function showNextButton(){
    let nextButton = document.getElementById('nextButton');
    if (nextButton) {
        console.log(nextButton);
        nextButton.style.visibility = "visible";
    } else {
        console.error("showNextButton: nextButton element not found");
    }
}

// displays the next question
function nextQuestion(){
    if (totalAnswered < quizLength-1) {
        qnum++;
       updateQuiz(questionSet);
        feedbackElement.innerText = "";
    } else {
        showResults();
    }
}

function updateQuiz(questionSet) {
    console.log(questionSet);
    if (!questionSet || questionSet.length === 0) {
        console.error("updateQuiz: questionSet is empty or undefined");
        return;
    }
    if (qnum < 0 || qnum >= questionSet.length) {
        console.error("updateQuiz: qnum is out of bounds");
        return;
    }
    console.log("start updateQuiz: assigned questions " + questionSet[qnum].question);
    // add question number (= qnum index+1) to Quiz page
    let questionCounterElement = document.querySelector('#questionCounter');
    console.log("bodyid " + document.body.id);
    let questionNumber = parseInt(qnum + 1);
    questionCounterElement.innerHTML = `<span>Question <span class="questionNum">${questionNumber}</span> of <span id="quizLength">${quizLength}</span></span>`;
    // add question text to Quiz page
    let questionTextElement = document.getElementById('questionText');
    questionTextElement.innerText = questionSet[qnum].question;
    // add question image and alt tag to Quiz page
    let imageElement = document.getElementById('questionImage');
    imageElement.src = questionSet[qnum].imageURL;
    imageElement.alt = questionSet[qnum].imageAlt;
    imageElement.width = "450"; //move width setting to css
    // add answer options to Quiz page
    let options = questionSet[qnum].options;
    let optionsArray = Object.keys(options);
    let optionSetDiv = document.getElementById('optionSet');
    console.log("options: "+options);
    let optionSet = '<div class="row mx-auto">';
    optionSet += '<div class="col-12 col-md-6 mb-2">';
    optionSet += `<button type='button' class='btn btn-secondary optionButton m-2' data-value='${optionsArray[0]}'>${optionsArray[0]}) ${options[optionsArray[0]]}</button>`;
    optionSet += "</div>";
    optionSet += '<div class="col-12 col-md-6 mb-2">';
    optionSet += `<button type='button' class='btn btn-secondary optionButton m-2' data-value='${optionsArray[1]}'>${optionsArray[1]}) ${options[optionsArray[1]]}</button>`;
    optionSet += "</div>";
    optionSet += '<div class="col-12 col-md-6 mb-2">';
    optionSet += `<button type='button' class='btn btn-secondary optionButton m-2' data-value='${optionsArray[2]}'>${optionsArray[2]}) ${options[optionsArray[2]]}</button>`;
    optionSet += "</div>";
    optionSet += '<div class="col-12 col-md-6 mb-2">';
    optionSet += `<button type='button' class='btn btn-secondary optionButton m-2' data-value='${optionsArray[3]}'>${optionsArray[3]}) ${options[optionsArray[3]]}</button>`;    
    optionSet += "</div>";
    optionSet += "</div>";
    optionSetDiv.innerHTML = optionSet;
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
            console.log("correct:"+correctNum+" totalAnswered:"+totalAnswered);
            // display feedback for correct answer
            feedbackElement.innerText = "Correct! Well done!";
        } else {
            // change button color to red with white text
            answerElement.classList.add('btn-danger');
            answerElement.classList.remove('btn-secondary');
            incorrectNum++;
            console.log("correct:"+correctNum+" incorrect:"+incorrectNum+" totalAnswered:"+totalAnswered);
            // display feedback for incorrect answer
            feedbackElement.innerText = questionSet[qnum].incorrectFeedback;
        }
    } else {
        // handle case where no answer is selected
        feedbackElement.innerText = "Please select an answer";
    }
    document.querySelectorAll('.optionButton').forEach(button => {
        button.disabled = true;
    });
    
    showNextButton();
    
}

// // builds the results page
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
    // display results
    resultsElement.innerHTML = `<h2>Results</h2>
    <div class="row justify-content-center">
            <div class="col-12 col-md-6 mb-2">
                <h4>You answered ${correctNum} questions correctly and ${incorrectNum} questions incorrectly.</h4>
                <h4>Your score is ${score}%.</h4>
                <h5 class="results-text">"${comment}</h5>
            </div>
            <div class="col-12 col-md-6">
            <div style="width:100%;height:0;padding-bottom:56%;">
            <iframe src="${animgifURL}" width="90%" height="90%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <div><a href="${gifURL} alt="${gifAlt} target="_blank">via GIPHY</a><div>
            </div>
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

// call app.init function
app.init();
