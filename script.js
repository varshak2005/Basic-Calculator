function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Result: Please enter valid numbers.";
    return;
  }

  let result;

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
      case "percentage":
        result=(num1 * num2)/2/100
        break;
    default:
      result = "Invalid operation";
  }

  resultDiv.textContent = `Result: ${result}`;
}
