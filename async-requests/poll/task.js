let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    let data = JSON.parse(xhr.responseText);
    let title, answers;

    for (key in data) {
      let item = data[key];
      title = item.title;
      answers = item.answers;
    }

    for (element of answers) {
      pollAnswers.insertAdjacentHTML(
        "afterbegin",
        `
            <button class="poll__answer">${element}</button>
            `
      );
    }
    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach((item) => {
      item.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    });
    pollTitle.insertAdjacentHTML("afterBegin", `${title}`);
  }
});
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
