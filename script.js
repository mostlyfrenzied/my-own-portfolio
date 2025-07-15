// ===== MENU TOGGLE FUNCTION FOR MOBILE =====
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show'); // Show/hide nav menu
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

// ===== ACTIVE LINK HIGHLIGHT AND MENU CLOSE ON CLICK =====
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Remove active class from all links
    navLink.forEach(n => n.classList.remove('active'));

    // Add active class to the clicked link
    this.classList.add('active');

    // Close the mobile menu after clicking
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

// Add click event to each nav link
navLink.forEach(n => n.addEventListener('click', linkAction));
