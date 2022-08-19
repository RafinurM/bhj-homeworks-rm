let deadCount = document.getElementById("dead");
let missCount = document.getElementById("lost");

for (let i = 1; i < 9; i++) {
  let hole = document.getElementById(`hole${i}`);
  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole")) {
      deadCount.textContent++;
    } else missCount.textContent++;
  };
}

let winLoss = function () {
  if (deadCount.textContent === "10") {
    alert("Победа!");
    deadCount.textContent = 0;
    missCount.textContent = 0;
  } else if (missCount.textContent === "10") {
    alert("Поражение!");
    deadCount.textContent = 0;
    missCount.textContent = 0;
  }
};

setInterval(winLoss, 100);
