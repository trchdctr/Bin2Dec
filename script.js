
function convertBinaryToDecimal() {

    var binaryInput = document.getElementById("binInp").value;

    // Validate binary input
    if (!/^[01]+$/.test(binaryInput)) {
        alert("That's not a Binary number, please enter a binary number (0 or 1).");
        return;
    }

    // Convert binary to decimal
    var decimalResult = parseInt(binaryInput, 2);

    // Display the result
    document.getElementById("result").innerHTML =  decimalResult;
}