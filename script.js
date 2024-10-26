// Contact Form Logic
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedbackElement = document.getElementById('formFeedback');

    feedbackElement.textContent = ''; // Clear previous feedback

    if (!name || !email || !message) {
        feedbackElement.textContent = 'Please fill in all fields.';
        feedbackElement.style.color = 'red';
        return;
    }

    if (!validateEmail(email)) {
        feedbackElement.textContent = 'Please enter a valid email address.';
        feedbackElement.style.color = 'red';
        return;
    }

    feedbackElement.textContent = `Thank you, ${name}! Your message has been sent.`;
    feedbackElement.style.color = 'green';
    this.reset();
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Login Form Logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const loginFeedback = document.getElementById('loginFeedback');

    loginFeedback.textContent = ''; // Clear previous feedback

    if (!username || !password) {
        loginFeedback.textContent = 'Please fill in all fields.';
        loginFeedback.style.color = 'red';
        return;
    }

    // Simulate login validation
    if (username === 'admin' && password === 'password123') {
        loginFeedback.textContent = 'Login successful!';
        loginFeedback.style.color = 'green';
    } else {
        loginFeedback.textContent = 'Invalid username or password.';
        loginFeedback.style.color = 'red';
    }

    this.reset();
});
