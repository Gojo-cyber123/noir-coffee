const revealElements = document.querySelectorAll(
    '.menu-heading, .menu-card, .about-content, .contact'
);

if ('IntersectionObserver' in window) {
    revealElements.forEach(element => element.classList.add('reveal'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(element => observer.observe(element));
} else {
    revealElements.forEach(element => element.classList.add('active'));
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const message = document.getElementById('formMessage');
        message.textContent = 'Спасибо! Это демонстрационная форма — сообщение не отправлено.';
        contactForm.reset();
    });
}
