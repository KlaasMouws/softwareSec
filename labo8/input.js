document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userInput = urlParams.get("input");
  // Set the text of the inputDiv to the sanitized input
  const inputDiv = document.getElementById("inputDiv");
  inputDiv.innerHTML = userInput;
});
