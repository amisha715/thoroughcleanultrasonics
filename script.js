// Optional: Add interactivity if needed
console.log("Website loaded!");
// You can add interactivity here, like showing a contact modal or redirecting
function openWhatsApp() {
      // Replace with your WhatsApp number
      window.open('https://wa.me/9810065745', '_blank');
    }

    function makeCall() {
      // Replace with your phone number
      window.location.href = 'tel:+9810065745';
    }
    // You can enhance this later with dynamic interactions
console.log("Contact page loaded successfully.");
function ShowContact(){
    var contactDiv=document.getElementById("contact");
    contactDiv.style.display="block;"
}
function Instagram() {
      // Replace with your WhatsApp number
      window.open('https://wa.me/1234567890', '_blank');
    }
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    drop.addEventListener("click", function (e) {
      e.stopPropagation();
      // Close all other dropdowns
      dropdowns.forEach(d => {
        if (d !== this) d.classList.remove("show");
      });
      // Toggle current dropdown
      this.classList.toggle("show");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
    dropdowns.forEach(d => d.classList.remove("show"));
  });
});
 let currentCaptcha = '';

    function generateCaptcha() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      currentCaptcha = '';
      for (let i = 0; i < 6; i++) {
        currentCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      document.getElementById('captchaCode').textContent = currentCaptcha;
    }

    function validateForm() {
      const input = document.getElementById('captchaInput').value.trim();
      const messageBox = document.getElementById('formMessage');

      if (input === currentCaptcha) {
        messageBox.style.color = 'green';
        messageBox.textContent = 'Message sent successfully!';
        // Clear form fields
        document.getElementById('contactForm').reset();
        generateCaptcha(); // Refresh CAPTCHA
        return false; // prevent actual form submission for demo
      } else {
        messageBox.style.color = 'red';
        messageBox.textContent = 'Incorrect CAPTCHA. Please try again.';
        generateCaptcha(); // Refresh CAPTCHA
        return false; // prevent form submission
      }
    }

    window.onload = generateCaptcha;
    
     const cards = document.querySelectorAll('.job-card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
      });
    });
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

