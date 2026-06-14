



/* ===========================================================
   PORTFOLIO SCRIPT.JS
   This file handles three things:
   1. Dark / light theme toggle (saved to localStorage)
   2. Mobile navigation menu toggle
   3. Contact form validation
=========================================================== */

// Wait until the whole page has loaded before running our code
document.addEventListener('DOMContentLoaded', function () {

  // -----------------------------------------------------
  // 1. DARK / LIGHT THEME TOGGLE
  // -----------------------------------------------------

  // Grab the elements we need
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlElement = document.documentElement; // the <html> tag

  // Check if the user already chose a theme before (saved in localStorage)
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    htmlElement.classList.add('dark-theme');
    themeIcon.textContent = '☀️'; // show a sun icon to switch back to light
  }

  // Run this every time the button is clicked
  themeToggleBtn.addEventListener('click', function () {
    // toggle() adds the class if it's missing, removes it if present
    htmlElement.classList.toggle('dark-theme');

    // Check which theme we are on now and update everything to match
    const isDark = htmlElement.classList.contains('dark-theme');

    if (isDark) {
      themeIcon.textContent = '☀️';
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      themeIcon.textContent = '🌙';
      localStorage.setItem('portfolio-theme', 'light');
    }
  });


  // -----------------------------------------------------
  // 2. MOBILE NAVIGATION MENU TOGGLE
  // -----------------------------------------------------

  const navToggleBtn = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  navToggleBtn.addEventListener('click', function () {
    // Show or hide the nav menu by adding/removing the "open" class
    mainNav.classList.toggle('open');

    // Update aria-expanded so screen readers know if the menu is open
    const isOpen = mainNav.classList.contains('open');
    navToggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close the mobile menu automatically when a link is clicked
  // (loop through every link inside the nav)
  const navLinks = mainNav.querySelectorAll('a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      navToggleBtn.setAttribute('aria-expanded', 'false');
    });
  });


  // -----------------------------------------------------
  // 3. CONTACT FORM VALIDATION
  // -----------------------------------------------------

  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  // Simple regular expression to check for a valid-looking email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm.addEventListener('submit', function (event) {
    // Stop the form from refreshing the page (we are not sending it anywhere yet)
    event.preventDefault();

    // Grab the current values from each field, trimming extra spaces
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();
    const messageValue = messageField.value.trim();

    // Assume the form is valid until we find a problem
    let isFormValid = true;

    // --- Check the name field ---
    if (nameValue === '') {
      showError(nameField, 'name-error', 'Please enter your name.');
      isFormValid = false;
    } else {
      clearError(nameField, 'name-error');
    }

    // --- Check the email field ---
    if (emailValue === '') {
      showError(emailField, 'email-error', 'Please enter your email address.');
      isFormValid = false;
    } else if (!emailPattern.test(emailValue)) {
      showError(emailField, 'email-error', 'Please enter a valid email address.');
      isFormValid = false;
    } else {
      clearError(emailField, 'email-error');
    }

    // --- Check the message field ---
    if (messageValue === '') {
      showError(messageField, 'message-error', 'Please write a short message.');
      isFormValid = false;
    } else if (messageValue.length < 10) {
      showError(messageField, 'message-error', 'Your message should be at least 10 characters long.');
      isFormValid = false;
    } else {
      clearError(messageField, 'message-error');
    }

    // If everything passed, show the success message and reset the form
    if (isFormValid) {
      successMessage.classList.add('visible');
      contactForm.reset();

      // Hide the success message again after a few seconds
      setTimeout(function () {
        successMessage.classList.remove('visible');
      }, 4000);
    } else {
      // Make sure the success message is hidden if there were errors
      successMessage.classList.remove('visible');
    }
  });

  // Helper function: displays an error message under a field
  function showError(field, errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    field.closest('.form-group').classList.add('invalid');
  }

  // Helper function: clears an error message from a field
  function clearError(field, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = '';
    field.closest('.form-group').classList.remove('invalid');
  }


  // -----------------------------------------------------
  // BONUS: automatically update the footer year
  // -----------------------------------------------------
  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();

});