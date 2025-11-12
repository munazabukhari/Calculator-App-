let inputBox = document.querySelector(".input-box");

function appendValue(value) {
  inputBox.value += value;
}
function clearValue() {
  inputBox.value = "";
}
function deleteValue() {
  inputBox.value = inputBox.value.slice(0, -1);
}
function calculate() {
  try {
    inputBox.value = eval(inputBox.value);
  } catch (error) {
    inputBox.value = "Error";
  }
}
