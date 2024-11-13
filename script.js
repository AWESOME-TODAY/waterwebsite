// JavaScript can handle form submissions, animations, or other interactivity as required.
console.log("Purified Water Services site is running!");


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Your message has been sent. Thank you for contacting us!');
      // Here, you can send the form data to the backend or API if needed.
      this.reset();
    } else {
      alert('Please fill out all the fields.');
    }
  });
  