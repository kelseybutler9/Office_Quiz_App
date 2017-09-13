const Questions = [{question: "What is the name of the cat Dwight tries to give Angela", rightAnswer: "Bruce"}, {question: "What is the name of Angela’s cat that Dwight is trying to replace", rightAnswer: "Sprinkles"}, {question: "What ringtone song played repeatedly on Andy's cell phone when Jim hid it in the ceiling at the office", rightAnswer: "Rockin Robin"}, {question: "What is Erin's first name, which she happens to share with a co-worker", rightAnswer: "Kelly"}, {question: "In the season 3 episode 'Grief Counseling' Michael organizes a funeral for which animal", rightAnswer: "Bird"}, {question: "What is the PPC", rightAnswer: "Party Planning Committee"}, {question: "What is the vegetable that Toby switches Creed’s apple with", rightAnswer: "Potato"}, {question: "What was Jim's first prank on the show", rightAnswer: "Jim puts Dwight's stapler in Jello"}, {question: "Just how did Ryan start the fire ", rightAnswer: "A cheese pita in the oven"}, {question: "Who does Michael take to Jamaica with him", rightAnswer: "Jan"}];
const Answers = [{answer: ["One","Two"], checked: false}];

let currentQuestion = 1;
let numberCorrect = 0;
let numberIncorrect = 0;

function startNewQuiz() {
  //when start the quiz is clicked, the js start page class is added to the item, the question list is created
  $('.start-quiz').submit(function(event) {
    event.preventDefault();
    console.log("New Quiz Ran");
    $('.start-quiz').toggleClass('js-start-page');
    renderQuestionForm();
  });
}
function restartQuiz() {
  //when restart the quiz is clicked, the js restart page class is added to the item, the question list is created
  $('.results-page').submit(function(event) {
    event.preventDefault();
    console.log("Restart Quiz Ran");
    $('.results-page').toggleClass('js-results-page');
    $('.start-quiz').toggleClass('js-start-page');
    currentQuestion = 1;
    numberIncorrect = 0;
    numberCorrect = 0;
  });
}
// function handleItemCheckClicked() {
//   $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
   

// function checkAnswerEntry() {
//   $("js-answers-list").on('click','REPLACE', event => {
//       //grab the item that was clicked 
//       //check the answer entry of it and compare to the right answer
        //call answerResult(answer)
//   })
//   
    
//   //update correct answer and incorrect answer
//   if (currentQuestion !== 10)
//     {
//       updateCurrentQuestion();
//     }
//   else
//     renderResultsPage();
//   
// }
function answerResult(answer){
  //check if the entered answer is correct and return true or false'
  return true;
}
function updateCurrentQuestion() {
  currentQuestion += 1;
}

function createAnswerListString() {
  currentAnswers = Answers[currentQuestion - 1].answer;
  //console.log(currentAnswers);
  let currentAnswersString = "";
  currentAnswers.map(function(item){
    currentAnswersString += "<label class=js-answer-item><input type='radio' name='answerOption' required value="+ item + "><span>"+ item + "</span></label>";
  });
  console.log(currentAnswersString);
  return currentAnswersString;
  //update to return the full string
}

function createQuestionString() {
  questionText = Questions[currentQuestion - 1].question;
  string = "<h3 class='js-question-text'>" + currentQuestion + ". " + questionText + "?</h3>";
  console.log(string);
  return string;
}

function renderQuestionForm(AnswersArray) {
  let questionString = createQuestionString();
  let AnswersString = createAnswerListString();
  //add question number div to label...currentQuestion
  //add in question under label
  //add in answers for question
  //add in number correct...need to run check answer entry
  //add in number incorrect
  return "renderQuestionForm ran";
}

function renderFeedbackForm() {
  return "renderFeedbackForm ran";
}

function renderResultsPage() {
  return null;
}

function handleQuiz(){
  startNewQuiz();
  renderQuestionForm();
  //checkAnswerEntry();
  createAnswerListString();
  renderFeedbackForm();
  createQuestionString();
  //answerResult();
}

$(handleQuiz());