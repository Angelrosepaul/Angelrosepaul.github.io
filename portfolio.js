// Smooth scrolling to sections when navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section id from href attribute
        const targetId = this.getAttribute('href').substring(1);
        
        // Scroll to the section smoothly
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Please fill out all fields before submitting the form.');
    } else {
        // If the form is valid, we proceed with the submission
        alert(`Thank you, ${name}! Your message has been sent.`);
    }
});
