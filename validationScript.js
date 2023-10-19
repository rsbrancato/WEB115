    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
      const inputField = document.getElementById('inputField');

      // Add event listener to form submit
      document.getElementById('myForm').addEventListener('submit', function (event) {
      event.preventDefault(); 

      // Validate input value using regular expression
      const inputValue = inputField.value;
      const alphanumericRegex = /^[a-zA-Z0-9]+$/; 
      
      // Regular expression pattern for alphanumeric input
      if (alphanumericRegex.test(inputValue)) {
      // Valid input: display confirmation and submit the form
      alert('Form submitted successfully!');
      this.reset(); // Reset the form
    } else {
      // Invalid input: display error message
      alert('Input should contain only alphanumeric characters.');
      }
  });
    