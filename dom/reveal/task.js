const div = document.querySelectorAll("div.reveal");

let listOfDiv = Array.from(div);
console.log(listOfDiv);

let scrollStatus = window.addEventListener("scroll", () => {
  const viewPort = window.innerHeight;
  listOfDiv.forEach((item) => {
    const { top, bottom } = item.getBoundingClientRect();
    console.log(top, bottom); // координаты в консоли
    if (bottom > 0 && top < viewPort) {
      item.classList.add("reveal_active");
    } else {
      item.classList.remove("reveal_active");
    }
  });
});
