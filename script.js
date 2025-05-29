//your JS code here. If required.
let expression = "";
const displayElement = document.getElementById("display");
const resultElement = document.createElement("p");
displayElement.innerHTML = "";
displayElement.appendChild(resultElement);

function updateDisplay(value) {
  resultElement.textContent = value;
}

function evaluateExpression() {
  try {
    if (expression.includes("/0")) throw new Error("Divide by zero");
    const result = eval(expression);
    if (!isFinite(result)) throw new Error("Invalid math");
    updateDisplay(result);
    expression = result.toString(); 
  } catch {
    updateDisplay("Error");
    expression = "";
  }
}

function handleButtonClick(value) {
  if (value === "C") {
    expression = "";
    updateDisplay("");
  } else if (value === "<-") {
    expression = expression.slice(0, -1);
    updateDisplay(expression);
  } else if (value === "=") {
    evaluateExpression();
  } else {
    expression += value;
    updateDisplay(expression);
  }
}

document.querySelectorAll(".box").forEach((box) => {
  const value = box.textContent.trim();
  box.addEventListener("click", () => handleButtonClick(value));
});
