let fontChangeButtons = document.querySelectorAll(".font-size");
let listOfButtons = Array.from(fontChangeButtons);
let book = document.querySelector('.book')

listOfButtons.forEach((item) => {
  item.onclick = function (event) {
    event.preventDefault();
  };

  item.addEventListener("click", () => {
    listOfButtons.forEach((el) => {
        el.classList.remove('font-size_active')
    })
    item.classList.add("font-size_active");
    if (item.classList.contains('font-size_small')) {
        book.classList.remove('book_fs-big')
        book.classList.add('book_fs-small')
    } else if (item.classList.contains('font-size_big')) {
        book.classList.remove('book_fs-small')
        book.classList.add('book_fs-big')
    } else {
        book.classList.remove('book_fs-small')
        book.classList.remove('book_fs-big')
    }
  });
  
});

// console.log(listOfButtons);
