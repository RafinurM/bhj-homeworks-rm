let tab = document.querySelectorAll(".tab");
let tabArray = Array.from(tab);

let content = document.querySelectorAll(".tab__content");
let contentArray = Array.from(content);


tabArray.forEach((item) => {
  item.addEventListener("click", (event) => {
    tabArray.forEach((item) => {
        item.classList.remove('tab_active')
    });
    contentArray.forEach((item) => {
        item.classList.remove('tab__content_active')
    })
    event.target.classList.add("tab_active");
    for (let i = 0; i < tabArray.length; i++) {
      if (tabArray[i].classList.contains("tab_active")) {
        contentArray[i].classList.add("tab__content_active");
      }
    }
  });
});
