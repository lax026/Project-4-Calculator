function display(val) {
  document.getElementById("result").value += val;
  return val;
}

function solve() {
  const x = document.getElementById("result").value;
  const y = eval(x);
  document.getElementById("result").value = y;
  return y;
}

function deleteLastDigit() {
  var displayValue = document.getElementById("result").value;
  document.getElementById("result").value = displayValue.slice(0, -1);
}

function clears() {
  document.getElementById("result").value = "";
}
