const data = [
{question: "What is the name of the cat Dwight tries to give Angela", rightAnswer: 2, answerEntry: 0, answerArray: ["Sprinkles", "Bruce", "Garbage", "Phyllis"]}, 
{question: "What is the name of Angela’s cat that Dwight is trying to replace", rightAnswer: 0, answerEntry: 0, answerArray: ["Sprinkles", "George", "Garbage", "Jim"]}, 
{question: "What ringtone song played repeatedly on Andy's cell phone when Jim hid it in the ceiling at the office", rightAnswer: 1, answerEntry: 0, answerArray: ["Blinded by the Light", "Rockin Robin", "Little Drummer Boy", "Tiny Dancer"]}, 
{question: "What is Erin's first name, which she happens to share with a co-worker", rightAnswer: 0, answerEntry: 0, answerArray: ["Kelly", "Jan", "Pam", "Phyllis"]}, 
{question: "In the season 3 episode 'Grief Counseling' Michael organizes a funeral for which animal", rightAnswer: 3, answerEntry: 0, answerArray: ["Dog", "Insect", "Fish", "Bird"]}, 
{question: "What is the PPC", rightAnswer: 0, answerEntry: 0, answerArray: ["Party Planning Committee", "Peace Party Conference", "Power Pilates Committe", "Party People Club"]}, 
{question: "What is the vegetable that Toby switches Creed’s apple with", rightAnswer: 2, answerEntry: 0, answerArray: ["Lettuce", "Onion", "Potato", "Grape"]}, 
{question: "What was Jim's first prank on the show", rightAnswer: 1, answerEntry: 0, answerArray: ["Dresses up as Dwight", "Puts stapler in Jello", "Prank calls Andy", "Convinced Dwight to Purchase a Purse"]}, 
{question: "Just how did Ryan start the fire (in the second season)", rightAnswer: 0, answerEntry: 0, answerArray: ["Burns a Pita", "His hair catches on fire", "Drops a candle", "Plays with matches"]}, 
{question: "Who does Michael take to Jamaica with him", rightAnswer: 0, answerEntry: 0, answerArray: ["Jan", "Jim", "Pam", "Holly"]}
];

let currentQuestion = 0;
let numberCorrect = 0;
let numberIncorrect = 0;

   
$('.question-form').on('click', '.NextQuestion', function() {
    event.preventDefault();
    currentQuestion++;
     
    if (currentQuestion !== data.length){
      $('.js-feedback-form').remove();
      $('.feedback-result').toggleClass('js-feedback-result')
      renderQuestionForm(data);
    }
    else {
      console.log('else ran');
      $('.js-feedback-form').remove();
      $('.feedback-result').toggleClass('js-feedback-result');
      $('.question-form').toggleClass('js-question-form');
      $('.results-page').toggleClass('js-results-page');
      $('.question-label').toggleClass('js-question-label');
      renderResultsPage();
    }
});

function startNewQuiz() {
  $('.start-quiz-button').click(function(event) {
    event.preventDefault();
    $('.start-quiz').toggleClass('js-start-page');
    $('.question-label').toggleClass('js-question-label');
    $('.question-form').toggleClass('js-question-form');
    renderQuestionForm();
  });
}

function renderQuestionForm() {
  let questionString = createQuestionString();
  let AnswersString = createAnswerListString();
  $('.question-number').empty();
  $('.question-number').append(currentQuestion + 1);
  $('.new-question').empty();
  $('.new-question').append(questionString + AnswersString);
  $('.correct-answers').empty();
  $('.incorrect-answers').empty();
  $('.correct-answers').append('Number of Correct Answers: ' + numberCorrect);
  $('.incorrect-answers').append('Number of Incorrect Answers: ' + numberIncorrect);
  checkAnswerEntry();
}

function createAnswerListString() {
  let currentAnswersString = "";
  data[currentQuestion].answerArray.map(function(item){
    currentAnswersString += "<label class=js-answer-item><input type='radio' name='answerOption' required value="+ item + "><span>"+ item + "</span></label>";
  });
  return currentAnswersString;
}

function createQuestionString() {
  console.log(currentQuestion);
  questionText = data[currentQuestion].question;
  question = currentQuestion + 1;
  string = "<p class='js-question-text'>" + question + ". " + questionText + "?</p>";
  return string;
}

function checkAnswerEntry() {
  $('.question-form input').on('change', function() {
    let answer = $(".question-form input:radio[name='answerOption']");
    let selectedIndex = answer.index(answer.filter(':checked'));
    console.log(selectedIndex);
    console.log(answer);
    data[currentQuestion].answerEntry = selectedIndex;
    result = answerResult(selectedIndex);
    renderFeedbackForm(result);
  });
}

function renderFeedbackForm(result) {
  if (result){
      feedbackString = '<div class= "feedback-form js-feedback-form"><img src="https://i.imgflip.com/13ju2z.jpg" alt="correct-image"><p>You answered Correctly!</p><button class="NextQuestion">Next Question</button><div class="space></div></div>'
  }
  else {
    feedbackString = '<div class= "js-feedback-form"><img src="https://4.bp.blogspot.com/-CYqggOWYaSk/VZNyJVJmGlI/AAAAAAAAEfQ/V8k5dCubYJY/s320/i%2Bunderstand%2Bnothing.jpg" alt="incorrect-image"><p>You answered incorrectly!</p><button class="NextQuestion">Next Question</button><div class=space></div></div>'
  }
  $('.feedback-result').toggleClass('js-feedback-result');
  $('.feedback-result').empty();
  $('.feedback-result').append(feedbackString);
}

function answerResult(answer){
  console.log(answer);
  if(answer === data[currentQuestion].rightAnswer){
    updateCorrectIncorrectAnswers(true);
    return true;
  }
  else {
    updateCorrectIncorrectAnswers(false);
    return false;    
  }
}

function updateCorrectIncorrectAnswers(result) {
  if (result){
    numberCorrect += 1;
  }
  else {
    numberIncorrect += 1;
  }
}

function renderResultsPage() {
  $('.correct-number-label').empty();
  $('.correct-number-label').append(numberCorrect);
  resultsString = '';
  data.forEach(function(item, index){
    resultsString += '<div class="results-list-item"><p>Question: ' + item.question + '?</p><p>Your Answer: ' + item.answerArray[item.answerEntry] + '</p><p>Correct Answer: ' + item.answerArray[item.rightAnswer] + '</p></div>';
  });
  $('.results-list').empty();
  $('.results-list').append(resultsString);  
}

function restartQuiz() {
  $('.restart-quiz-button').click(function(event) {
    event.preventDefault();
    $('.results-page').toggleClass('js-results-page');
    $('.start-quiz').toggleClass('js-start-page');
    numberIncorrect = 0;
    numberCorrect = 0;
    currentQuestion = 0;
  });
}

function handleQuiz(){
  startNewQuiz();
  restartQuiz();
}

$(handleQuiz());