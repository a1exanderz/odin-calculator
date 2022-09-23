let currentEntry = "0";
const bottomOutput = document.getElementById("bottomOutput");
const topOutput = document.getElementById("topOutput");

// Clear and delete buttons
const clear = document.getElementById("clearButton");
clear.onclick = () => {
  currentEntry = "0";
  updateTopOutput(null, null);
  updateBottomOutput();
};

// All digits
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

zero.onclick = () => {
  addToComputation("0");
};
one.onclick = () => {
  addToComputation("1");
};
two.onclick = () => {
  addToComputation("2");
};
three.onclick = () => {
  addToComputation("3");
};
four.onclick = () => {
  addToComputation("4");
};
five.onclick = () => {
  addToComputation("5");
};
six.onclick = () => {
  addToComputation("6");
};
seven.onclick = () => {
  addToComputation("7");
};
eight.onclick = () => {
  addToComputation("8");
};
nine.onclick = () => {
  addToComputation("9");
};

// Operations
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");

divide.onclick = () => {
  addToComputation("/");
};
multiply.onclick = () => {
  addToComputation("*");
};
subtract.onclick = () => {
  addToComputation("-");
};
add.onclick = () => {
  addToComputation("+");
};

///////
function addToComputation(stringValue) {
  if (currentEntry === "0") {
    currentEntry = stringValue;
  }
  if (
    stringValue === "/" ||
    stringValue === "*" ||
    stringValue === "+" ||
    stringValue === "-"
  ) {
    updateTopOutput(currentEntry, stringValue);
    currentEntry = 0;
  } else {
    currentEntry += stringValue;
  }
  updateBottomOutput();
}

function updateTopOutput(entry, operation) {
  if (!entry && !operation) {
    topOutput.textContent = null;
  } else {
    topOutput.textContent = `${entry} ${operation}`;
  }
}

function updateBottomOutput() {
  bottomOutput.textContent = currentEntry;
}

/////
window.onload = () => {
  bottomOutput.textContent = currentEntry;
};
