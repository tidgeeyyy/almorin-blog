// Get the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Check if a theme is saved in localStorage, and apply it
if (localStorage.getItem('theme') === 'dark') {
    document
