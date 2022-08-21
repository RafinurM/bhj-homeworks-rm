let adv;

setInterval(() => {
  adv = document.querySelector("span.rotator__case_active");
  adv.classList.toggle("rotator__case_active");
  if (!adv.nextElementSibling) {
    adv = document.querySelector("span.rotator");
    adv.firstElementChild.classList.toggle("rotator__case_active");
    return;
  }
  adv.nextElementSibling.classList.toggle("rotator__case_active");
}, 1000);
