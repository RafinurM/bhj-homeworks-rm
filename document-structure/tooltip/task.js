let helpText = document.getElementsByClassName("has-tooltip");

let helpTextArr = Array.from(helpText);
let tip = document.createElement("div");
tip.setAttribute("class", "tooltip");
helpTextArr.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let tipTitle = item.getAttribute("title");
    tip.innerText = tipTitle;
    let tipPosition = item.getBoundingClientRect();
    tip.style.left = `${tipPosition.left}px`;
    if (item.nextElementSibling !== tip) {
      tip.classList.add("tooltip_active");
      item.insertAdjacentElement("afterEnd", tip);
    } else if (item.nextElementSibling === tip) {
      item.nextElementSibling.remove();
    }
  });
});
