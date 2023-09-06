function validateForm(event) {
    event.preventDefault();
  
    const form = document.getElementById('registrationForm');
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].innerText = '';
    }
  
    
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let hasError = false;
  
    if (!usernameRegex.test(username)) {
      document.getElementById('usernameError').innerText = 'Username must be 3 to 16 characters and can only contain letters, numbers, underscores, and hyphens.';
      hasError = true;
    }
  
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid email address.';
      hasError = true;
    }
  
    if (password.length < 8) {
      document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
      hasError = true;
    }
  
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
      hasError = true;
    }
  
    if (!hasError) {
      form.submit();
    }
  }