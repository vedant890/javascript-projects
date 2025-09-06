let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const timerDisplay = document.getElementById("timer");
let timeLeft = 15 * 60; // 15 minutes in seconds

function showQuestion(index) {
  questions.forEach((q, i) => {
    q.classList.remove("active");
    if (i === index) q.classList.add("active");
  });

  prevBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.style.display = index === questions.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = index === questions.length - 1 ? "inline-block" : "none";
}

function calculateScore() {
  let score = 0;
  questions.forEach(q => {
    const checked = q.querySelector("input[type='radio']:checked");
    if (checked && checked.value === "correct") score++;
  });
  return score;
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});

document.getElementById("quizForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const score = calculateScore();
  result.textContent = `You scored ${score} out of ${questions.length}`;
  document.querySelector(".buttons").style.display = "none";
  questions.forEach(q => q.style.display = "none");
});

// Timer function
function startTimer() {
  const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      const score = calculateScore();
      result.textContent = `⏰ Time's up! You scored ${score} out of ${questions.length}`;
      document.querySelector(".buttons").style.display = "none";
      questions.forEach(q => q.style.display = "none");
    }
  }, 1000);
}

showQuestion(currentQuestion);
startTimer();
