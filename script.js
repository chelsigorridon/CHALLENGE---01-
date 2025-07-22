function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

 if (/^pet_[a-zA-Z0-9]+$/.test(input)) {
    result = "Valid syntax!";
  } else {
    result =
      "Invalid syntax. Please start with 'pet_' followed by alphanumeric characters.";
  }

    
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


