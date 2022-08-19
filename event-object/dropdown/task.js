let dropdown = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let switcher = 1;
let listItems = document.querySelectorAll(".dropdown__item")
let itemArray = Array.from(listItems)

let openCloseList  = function () {
    if (switcher === 1) {
        list.classList.add("dropdown__list_active");
        switcher = 0;
    } else if (switcher === 0) {
        list.classList.remove("dropdown__list_active");
        switcher = 1;
    }
  
};
let chooseItem = function(event) {
    event.preventDefault();
    dropdown.textContent = this.textContent;
    list.classList.remove("dropdown__list_active");
    switcher = 1;

}

itemArray.forEach((item) => {
    item.addEventListener("click", chooseItem)
})


    
dropdown.addEventListener("click", openCloseList);

