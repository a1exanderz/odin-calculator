let currentEntry = "0";
let valueOne = null;
let valueTwo = null;
let operation = null;

const bottomOutput = document.getElementById("bottomOutput");
const topOutput = document.getElementById("topOutput");

// Clear and delete buttons
const clear = document.getElementById("clearButton");
clear.onclick = () => {
  currentEntry = "0";
  valueOne = null;
  valueTwo = null;
  operation = null;
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
  addToNumber("0");
};
one.onclick = () => {
  addToNumber("1");
};
two.onclick = () => {
  addToNumber("2");
};
three.onclick = () => {
  addToNumber("3");
};
four.onclick = () => {
  addToNumber("4");
};
five.onclick = () => {
  addToNumber("5");
};
six.onclick = () => {
  addToNumber("6");
};
seven.onclick = () => {
  addToNumber("7");
};
eight.onclick = () => {
  addToNumber("8");
};
nine.onclick = () => {
  addToNumber("9");
};

// Computation operations
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");

divide.onclick = () => {
  addComputation("/");
};
multiply.onclick = () => {
  addComputation("*");
};
subtract.onclick = () => {
  addComputation("-");
};
add.onclick = () => {
  addComputation("+");
};

// Make computation
const compute = document.getElementById("computeOperation");

compute.onclick = () => {
  makeComputation(currentEntry);
};

///
function addToNumber(stringValue) {
  if (currentEntry === "0") {
    console.log("new num");
    currentEntry = stringValue;
  } else {
    console.log("append num");
    if (currentEntry.length <= 11) {
      currentEntry += stringValue;
    }
  }
  updateBottomOutput();
}

function addComputation(stringValue) {
  updateTopOutput(currentEntry, stringValue);

  if (!valueTwo) {
    valueOne = currentEntry;
  } else {
    valueOne = bottomOutput.textContent;
    updateTopOutput(valueOne, stringValue);
  }

  operation = stringValue;
  currentEntry = "0";
  compute.disabled = false;
  console.log(valueOne, operation, valueTwo);
}

function makeComputation(stringValue) {
  topOutput.textContent += ` ${bottomOutput.textContent} =`;
  valueTwo = stringValue;
  if (operation === "+") {
    bottomOutput.textContent = parseInt(valueOne) + parseInt(valueTwo);
  } else if (operation === "-") {
    bottomOutput.textContent = valueOne - valueTwo;
  } else if (operation === "*") {
    bottomOutput.textContent = valueOne * valueTwo;
  } else if (operation === "/") {
    bottomOutput.textContent = valueOne / valueTwo;
  }
  compute.disabled = true;
  console.log(valueOne, operation, valueTwo);
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

// user inputs number onto bottomScreen
//  can contain only 1 decimal, 1 decimal disables rest
// when operation is pressed, number is sent to topScreen, with operation next to it
//  all other operations including = are now disabled
// enter a new number at the bottomScreen and press enter to compute operation
