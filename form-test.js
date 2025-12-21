// Form submission test script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const message = formData.get('message');
            
            alert(`Form submitted successfully!\n\nName: ${name}\nMessage: ${message}`);
            
            console.log('Form Data Submitted:');
            console.log('Name:', name);
            console.log('Message:', message);
            
            form.reset();
        });
    }
});
