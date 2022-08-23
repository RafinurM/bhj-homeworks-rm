let chatStart = document.querySelector(".chat-widget__side-text");
let chatWidget = document.querySelector(".chat-widget");
let chatInput = document.getElementById("chat-widget__input");
let messages = document.querySelector(".chat-widget__messages");
let message;
let chatInputFocusFlag = false;
let time = new Date();

let botMessages = [
    'Кто тут?', 
    'Что Вам надо?',
    'Никого нету дома',
    'z-z-Z',
    'Абонент не доступен, напишите позже'
]
function rndmMsg(max) {
    return Math.floor(Math.random() * max)
}
rndmMsg(botMessages.length)

let now = time.getHours() + ':' + time.getMinutes();
chatStart.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
});

chatInput.addEventListener("focus", () => {
  chatInputFocusFlag = true;
});
chatInput.addEventListener("blur", () => {
  chatInputFocusFlag = false;
});

function sendMessage(e) {
  if (chatInputFocusFlag && e.key === "Enter" && chatInput.value) {
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${now}</div>
      <div class="message__text">
      ${chatInput.value}
      </div>
    </div>
  `;
    messages.innerHTML += `
  <div class="message">
    <div class="message__time">${now}</div>
    <div class="message__text">${botMessages[rndmMsg(botMessages.length)]}</div>
  </div>
  `;
  }
}

document.addEventListener("keydown", sendMessage);
