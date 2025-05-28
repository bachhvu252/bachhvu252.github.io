const form = document.getElementById('subscriptionForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();

  const isNameValid = fullName.length >= 3;
  const isEmailValid = /^[^@]+@[^@]+\.[^@]+$/.test(email);

  if (!isNameValid) {
    alert("Full name must be at least 3 letters.");
    return;
  }

  if (!isEmailValid) {
    alert("Please enter a valid email address.");
    return;
  }

  successMessage.style.display = 'block';
  form.reset();
});
