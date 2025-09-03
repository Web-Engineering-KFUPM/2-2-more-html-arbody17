// Form submission test script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const message = formData.get('message');
            
            // Display the submitted data
            alert(`Form submitted successfully!\n\nName: ${name}\nMessage: ${message}`);
            
            // Optional: Log to console as well
            console.log('Form Data Submitted:');
            console.log('Name:', name);
            console.log('Message:', message);
            
            // Optional: Clear the form after submission
            form.reset();
        });
    }
});
