let popup = document.querySelector(".modal");
let closeButton = document.querySelector(".modal__close");
let makeThisFineButton = document.querySelector(".btn_danger")

window.onload = function () {
    popup.classList.add("modal_active")
};

closeButton.onclick = function() {
    popup.classList.remove("modal_active")
}

makeThisFineButton.onclick = function() {
    makeThisFineButton.classList.remove("btn_danger");
    makeThisFineButton.classList.add("btn_success");
    makeThisFineButton.textContent = "Хорошо сделано!"
}
