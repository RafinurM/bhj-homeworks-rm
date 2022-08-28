let searchField = document.getElementById("task__input");
let taskList = document.getElementById("tasks__list");
let btn = document.getElementById("tasks__add");
let removeBtn = document.querySelectorAll("task__remove");

function addTask() {
  let task = searchField.value.trim();
  if (task.length > 0) {
    let element = document.createElement("div");
    element.classList.add("task");
    taskList.appendChild(element);
    element.innerHTML += `
    <div class="task__title">
      ${task}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;

    let removeItem = element.querySelector(".task__remove");
    removeItem.addEventListener("click", (e) => {
      e.target.closest(".task").remove();
    });
    searchField.value = "";
  }
  return false;
}

btn.onclick = addTask;
searchField.change = addTask;
