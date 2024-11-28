    // set qnum to access index in quizQuestions array
    let qnum = 0;
    // set correctNum as number of questions answered correctly
    let correctNum = 0;
    // set incorrectNum as number of questions answered incorrectly
    let incorrectNum = 0;
    
    const quizQuestions = [
        {
            question: "What is the UK currency?",
            options: {
                a: "Euro",
                b: "Dollar",
                c: "Pound",
                d: "Ruble"
            },
            correctAnswer: "c",
            category: "law", // add category to question: history, geography, law, culture
            imageURL: "assets/images/coins.webp",
            imageAlt: "Some coins and notes",
            incorrectFeedback: "The pound sterling, commonly known as the pound, is the official currency of the United Kingdom and is symbolised by £ with the currency code GBP."
        },
        {
            question: "Where in Scotland is known as the home of golf?",
            options: {
                a: "Glasgow",
                b: "Edinburgh",
                c: "St Andrew's",
                d: "Aberdeen"
            },
            correctAnswer: "c",
            imageURL: "assets/images/golf.webp",
            imageAlt: "A golf ball on a tee",
            incorrectFeedback: "St Andrews in Scotland is known as the home of golf."
        }
    
    ];
    // event listener for nextQuestionButton
    
// displays the next question
function nextQuestion(){
    qnum++;
    
}

// submit answer
function submitAnswer(){
    // check if userAnswer matches correctAnswer in quizQuestions array
    // correctNum++
    // else incorrectNum++
}

// build the quiz page for a specific question in the quizQuestions array
function buildQuiz(){
    // add question number (= qnum index+1) to Quiz page
    // add question text to Quiz page
    // add question image and alt tag to Quiz page
    // add answer options to Quiz page

}