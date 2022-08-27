let progressLoading = document.getElementById("progress");
let form = document.getElementById("form");
progressLoading.value = 0;

function Process(a, b) {
  if (progressLoading.value < +(a / b)) {
    progressLoading.value = +(a / b);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let xhr = new XMLHttpRequest();
  formData = new FormData(this);

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

  let idInterval = setInterval(() => {
    if (!xhr.upload.onprogress) {
      if (progressLoading.value < 0.85) {
        progressLoading.value = 0.005 + progressLoading.value;
      }
    }
  }, 200);

  if (xhr.upload) {
    xhr.upload.addEventListener(
      "progress",
      function (event) {
        clearInterval(idInterval);
        if (event.lengthComputable) {
          Process(event.loaded, event.total);
        }
      },
      false
    );

    xhr.send(formData);
  }
});
