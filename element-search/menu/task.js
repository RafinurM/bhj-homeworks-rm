let menuLinks = document.querySelectorAll(".menu__link");
let linksArray = Array.from(menuLinks);

linksArray.forEach((item) => {
  let switcher = 1;
  item.onclick = function () {
    let li = item.closest("li");
    let ul = li.querySelector("ul");
    if (switcher) {
      ul.classList.add("menu_active");
      switcher = 0;
    } else {
      ul.classList.remove("menu_active");
      switcher = 1;
    }
    return false;
  };
});
