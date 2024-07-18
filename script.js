const checkBtn = document.getElementById("check-button");
const clearBtn = document.getElementById("clear-button");
const resultDisplay = document.getElementById("results-container");
const userInput = document.querySelector("input");

const isValidNumber = (input) => {
  const phoneRegex = /^(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return phoneRegex.test(input);
};

checkBtn.addEventListener("click", () => {
  const userInput = document.querySelector("input").value;

  if (userInput === "") {
    // alert('Please enter a phone number');
    resultDisplay.innerHTML = `<p>hi</p>`;
  } else {
    if (isValidNumber(userInput)) {
      resultDisplay.innerHTML = `<p>Valid US number: ${userInput}</p>`;
      resultDisplay.style.color = "green";
    } else {
      resultDisplay.innerHTML = `<p>Not a Valid US number: ${userInput}</p>`;
      resultDisplay.style.color = "red";
    }
  }
});

clearBtn.addEventListener("click", () => {
  resultDisplay.innerHTML = "";
  userInput.value = "";
});
