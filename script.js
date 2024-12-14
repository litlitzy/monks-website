// Function to generate a random number between 1 and 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function to start the security verification
function startSecurityVerification() {
    // Generate two random numbers
    var number1 = generateRandomNumber();
    var number2 = generateRandomNumber();

    // Display the numbers on the screen
    document.getElementById("number1").textContent = number1;
    document.getElementById("number2").textContent = number2;

    // Store the correct answer (sum of the two numbers)
    var correctAnswer = number1 + number2;

    // Add an event listener to the "Verify" button
    document.getElementById('verify-button').addEventListener('click', function(event) {
        // Prevent the button from doing something automatically (like submitting a form)
        event.preventDefault();

        // Get the value entered by the user
        var result = document.getElementById('user-result').value;

        // Check if the entered value matches the correct answer
        if (parseInt(result) === correctAnswer) {
            // If correct, redirect to another page
            window.location.href = "EuTenteiDesculpaT~T.com";  // Change this to your desired URL
        } else {
            // If incorrect, show an error message
            document.getElementById('feedback').innerText = "Incorrect result. Try again.";
        }
    });
}

// Start the verification when the page loads
window.onload = startSecurityVerification;
