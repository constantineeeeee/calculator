const buttonsEl = document.querySelectorAll("button");
const inputFieldel = document.getElementById("result");
//let equalPress = false;

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;

    if (buttonValue == "C") {
      clearResult();
    } else if (buttonValue == "=") {
      //equalPress = true;
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldel.value = "";
}

function calculateResult() {
  inputFieldel.value = eval(inputFieldel.value);
}

function appendValue(buttonValue) {
  inputFieldel.value += buttonValue;
}
