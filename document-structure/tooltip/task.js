let helpText = document.getElementsByClassName("has-tooltip");

let helpTextArr = Array.from(helpText);
let tip = document.createElement("div"); // создаем div
tip.setAttribute("class", "tooltip"); // добавляем класс
tip.classList.add("tooltip_active"); // добавляем активный класс
helpTextArr.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let tipTitle = item.getAttribute("title"); //получаем текст подсказки
    tip.innerText = tipTitle; // вставляем текст подсказки
    item.insertAdjacentElement("afterEnd", tip);
  });
});
