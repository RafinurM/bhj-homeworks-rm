let timerCount = document.getElementById("timer");

const counter = function () {
  if (timerCount.textContent === "0") {
    alert("Вы победили в конкурсе!");
    clearInterval(timer);
  } else {
    timerCount.textContent -= 1;
  }
};

let timer = setInterval(counter, 1000);
