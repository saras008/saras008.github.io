document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  // Replace with your form handling logic
  console.log('Form submitted:', formData);
  
  // Clear form
  this.reset();
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
});