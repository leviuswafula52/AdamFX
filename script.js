document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/your-formspree-endpoint', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for registering! We will contact you soon.');
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form.');
    });
});