let searchField = document.getElementById("task__input");
let taskList = document.getElementById("tasks__list");
let btn = document.getElementById("tasks__add");

searchField.addEventListener("focus", () => {
  searchFieldInputFocusFlag = true;
});
searchField.addEventListener("blur", () => {
  searchFieldInputFocusFlag = false;
});

function addTask(e) {
  if (
    (searchFieldInputFocusFlag && searchField.value && e.key === "Enter") ||
    (searchField.value && e.type === "click")
  ) {
    taskList.insertAdjacentHTML(
      "afterBegin",
      `<div class="task">
    <div class="task__title">
      ${searchField.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`
    );
    searchField.value = "";
    let removeBtn = document.querySelector("a.task__remove");
    removeBtn.addEventListener("click", removeTask);
  }
}

function removeTask(e) {
  e.target.parentElement.remove();
}

function stop(e) {
  e.preventDefault();
}

btn.addEventListener("click", addTask);
document.addEventListener("keydown", addTask);
