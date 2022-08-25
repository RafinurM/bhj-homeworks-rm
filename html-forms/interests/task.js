let mainCheckbox = document.querySelectorAll(".interest__check");
let mainUl = document.querySelector("ul");
let interestList = Array.from(mainCheckbox);

interestList.forEach((item) => {
  item.addEventListener("change", () => {
    if (item.checked && item.closest("ul") === mainUl) {
      let interestsArr = Array.from(
        item.parentElement.nextElementSibling.children
      );

      interestsArr.forEach((arrItem) => {
        let label = Array.from(arrItem.children);
        label.forEach((input) => {
          let inputBox = Array.from(input.children);
          inputBox[0].setAttribute("checked", true);
        });
      });
    } else if (!item.checked && item.closest("ul") === mainUl) {
      let interestsArr = Array.from(
        item.parentElement.nextElementSibling.children
      );
      interestsArr.forEach((arrItem) => {
        let label = Array.from(arrItem.children);
        label.forEach((input) => {
          let inputBox = Array.from(input.children);
          inputBox[0].removeAttribute("checked");
        });
      });
    }
  });
});
