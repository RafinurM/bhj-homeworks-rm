let form = document.getElementById("signin__form");
let signin = document.getElementById("signin");
let welcome = document.getElementById("welcome");
let userId = document.getElementById("user_id");

let storageId = localStorage.getItem("id");
  if (storageId) {
    welcome.classList.add("welcome_active");
    signin.classList.remove("signin_active");
    userId.innerHTML = storageId
  }


form.addEventListener("submit", (e) => {
  e.preventDefault();
  

  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
      let data = JSON.parse(xhr.response);
      let success = data.success;
      if (success) {
        let id = data.user_id;
        localStorage.setItem("id", id);
        welcome.classList.add("welcome_active");
        signin.classList.remove("signin_active");
        userId.innerHTML = id;
      } else {
        alert("Неверные логин/пароль");
      }
    }
  });
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.send(formData);
});
