const elements = document.querySelectorAll(
    '.menu-heading, .menu-card, .about-content, .contact'
);

elements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(element => {
    observer.observe(element);
});