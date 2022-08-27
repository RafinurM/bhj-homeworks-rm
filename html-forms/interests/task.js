let interestList = document.querySelectorAll(".interest__check");
let mainUl = document.querySelector("ul");
let interestListArr = Array.from(interestList);

interestListArr.forEach((item) => {
  item.addEventListener("change", () => {
    if (item.checked && item.closest("ul") === mainUl) {
      let interest = Array.from(item.parentElement.nextElementSibling.children);
      interest.forEach((element) => {
        element.firstElementChild.firstElementChild.setAttribute(
          "checked",
          true
        );
      });
    } else if (!item.checked && item.closest("ul") === mainUl) {
      let interest = Array.from(item.parentElement.nextElementSibling.children);
      interest.forEach((element) => {
        element.firstElementChild.firstElementChild.outerHTML = '<input type="checkbox" class="interest__check"></input>'
      });
    }
  });
});
