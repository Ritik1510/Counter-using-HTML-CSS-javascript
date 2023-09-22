let number = 0;
document.getElementById("decrease_button").onclick = function () {
  number -= 1;
  document.getElementById("counting_Number").innerHTML = number;
};
document.getElementById("reset_button").onclick = function () {
  number = 0;
  document.getElementById("counting_Number").innerHTML = number;
};
document.getElementById("increase_button").onclick = function () {
  number += 1;
  document.getElementById("counting_Number").innerHTML = number;
};

document.getElementById("submitBtn").onclick = function () {
  // Select the input container
  const inputContainer = document.querySelector(".hidden");

  // Toggle the "hidden" class to show/hide the input container
  if (inputContainer.classList.contains("hidden")) {
    inputContainer.classList.remove("hidden");
  } else {
    inputContainer.classList.add("hidden");
  }

  // Add an event listener to the entire document to handle "Enter" key press
  document.addEventListener("keydown", function (event) {
    // Check if the "Enter" key (key code 13) is pressed
    if (event.keyCode === 13) {
        // Get the input value as a number
        const inputValue = parseFloat(document.getElementById("inputContainer").value);

        // Update the number by adding the input value
        number += inputValue;

        // Update the label with the new number
        document.getElementById("counting_Number").textContent = number;

        // Hide the input container
        inputContainer.classList.add("hidden");
    }
});
};
