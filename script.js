// script.js

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#500';
    }
});


    function validateForm(event) {
        // Prevent the form from submitting if validation fails
        event.preventDefault();

        // Get form elements
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation flag
        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(msg => msg.remove());

        // Validate name
        if (name === '') {
            showError('name', 'Name is required.');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showError('email', 'Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'Invalid email format.');
            isValid = false;
        }

        // Validate message
        if (message === '') {
            showError('message', 'Message is required.');
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            // Submit the form
            alert('Successfully submitted');
            document.querySelector('form').submit();
        }
    }

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.style.color = 'red';
        error.textContent = message;
        field.parentNode.insertBefore(error, field.nextSibling);
    }

    function validateEmail(email) {
        // Simple email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Attach the validation function to the form's submit event
    document.querySelector('form').addEventListener('submit', validateForm);

