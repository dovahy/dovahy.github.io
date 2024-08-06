let questions;
let currentQuestionIndex;
let nextQuestionTimeout;
let timeLeft = 5;
let timerInterval;

// Load JSON file
fetch('quiz.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    displayQuestion();
  });

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option, currentQuestion.answer);
    optionsElement.appendChild(button);
  });

  document.getElementById('timer').style.display = 'none';

}

function checkAnswer(correctAnswer) {
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach(button => {
    if (button.textContent === correctAnswer) {
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
    }
    button.disabled = true;
  });

  document.getElementById('timer').style.display = 'block';

  // Start the timer interval
  timeLeft = 5;
  document.getElementById('time-left').textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('time-left').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  clearTimeout(nextQuestionTimeout);

  nextQuestionTimeout = setTimeout(nextQuestion, 5000);
}

function nextQuestion() {
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach(button => {
    button.classList.remove('correct', 'incorrect');
    button.disabled = false;
  });

  document.getElementById('timer').style.display = 'none';

  clearInterval(timerInterval);

  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  displayQuestion();
}