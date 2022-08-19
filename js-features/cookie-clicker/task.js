let count = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let clickCount = 0;
let switcher = 0;

cookie.onclick = function () {
  count.textContent = clickCount++;
  if (switcher === 0) {
    cookie.style.width = "220px";
    switcher = 1;
  } else {
    cookie.style.width = "200px";
    switcher = 0;
  }
};
