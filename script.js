// Function to generate a random number between 1 and 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function startSecurityVerification() {
    var number1 = generateRandomNumber();
    var number2 = generateRandomNumber();

    document.getElementById("number1").textContent = number1;
    document.getElementById("number2").textContent = number2;

    var correctAnswer = number1 + number2;

    document.getElementById('verify-button').addEventListener('click', function(event) {
        event.preventDefault();

        var result = document.getElementById('user-result').value;

        if (parseInt(result) === correctAnswer) {
            window.location.href = "EuTenteiDesculpaT~T.com";
        } else {
            document.getElementById('feedback').innerText = "Incorrect result. Try again.";
        }
    });
}


window.onload = startSecurityVerification;
