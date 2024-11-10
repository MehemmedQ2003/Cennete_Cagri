// Get the theme icons and body element
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

// Apply the stored theme on page load
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    body.classList.add(storedTheme);
}

const navLink = document.querySelectorAll('.nav-link');

// Event listeners for theme toggle
sunIcon.addEventListener('click', () => {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme'); // Store the theme
});

moonIcon.addEventListener('click', () => {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme'); // Store the theme
});


// Navbar text underline
document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split('/').pop();

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (href === currentPath) {
            link.classList.add("active");
        }
    });
});




// Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();