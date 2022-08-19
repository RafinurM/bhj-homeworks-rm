let timerCount = document.getElementById("timer")

const counter = function () {
  if (timerCount.textContent === '0') {
    alert("Вы победили в конкурсе!");
    timerCount.textContent = 15;
  } else {
    timerCount.textContent -= 1;
  }
};

setInterval(counter, 1000); 
