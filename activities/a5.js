// Get references to the HTML elements
var button = document.getElementById("clickMeButton");
var message = document.getElementById("message");
// Function to handle button click
function handleButtonClick() {
    var now = new Date();
    message.textContent = "Button clicked at: ".concat(now.toLocaleTimeString());
}
// Add event listener to the button
button.addEventListener("click", handleButtonClick);
