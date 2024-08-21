document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    // Simple validation checks
    if (firstName === '' || lastName === '' || email === '' || contact === '' || address === '' || city === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    if (isNaN(contact) || contact.length < 10) {
        alert('Please enter a valid contact number with at least 10 digits.');
        return;
    }

    // Log the form values to the console (this could be replaced with a function to send data to a server)
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Contact: ${contact}`);
    console.log(`Address: ${address}`);
    console.log(`City: ${city}`);

    // Display a success message
    alert('Registration Complete!');
    document.getElementById('registrationForm').reset();
});
