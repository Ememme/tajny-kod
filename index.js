import "./style.css";

document.querySelector(".display").textContent = "1234";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".keyboard__button");
const saveButton = document.querySelector(".keyboard__button--save");
const resetButton = document.querySelector(".keyboard__button--reset");

let secretCode = [];
buttons.forEach(button =>
  button.addEventListener("click", event => {
    if (event.target == resetButton) {
      resetDisplay();
    } else if (event.target == saveButton) {
      saveCode(secretCode);
    } else {
      checkCode(secretCode);
    }
  })
);


function checkCode(array) {
  if (array.length < 4) {
    array.push(event.target.innerHTML);
  } else if (array.length = 4) {
    return array
  }
}

function resetDisplay() {
  display.innerHTML = "";
  secretCode = [];
}

function saveCode() {
  if (saveButton) {
    display.innerHTML = secretCode.join('');
  }
}
