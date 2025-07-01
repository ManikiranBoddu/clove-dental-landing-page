// Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;

    if (name && phone) {
        alert('Appointment booked successfully! We will contact you soon.');
        e.target.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});