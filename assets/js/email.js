document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var form = this;
    emailjs.sendForm('service_4vox02n', 'template_c2yeoqj', form)
        .then(function(response) {
            alert('Email sent!');
            form.reset();
        }, function(error) {
            alert('Email failed to send. Please try again later.');
        });
});
