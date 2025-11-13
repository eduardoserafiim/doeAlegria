const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '999';
    confetti.style.pointerEvents = 'none';
    
    const colors = ['#C41E3A', '#165B33', '#FFD700', '#FFFFFF'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    
    document.body.appendChild(confetti);
    
    let top = -10;
    let left = parseFloat(confetti.style.left);
    const interval = setInterval(() => {
        top += Math.random() * 5 + 2;
        left += (Math.random() - 0.5) * 2;
        confetti.style.top = top + 'px';
        confetti.style.left = left + '%';
        
        if (top > window.innerHeight) {
            clearInterval(interval);
            confetti.remove();
        }
    }, 10);
}

document.querySelector('.cta-button').addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        setTimeout(createConfetti, i * 20);
    }
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.style.color = 'var(--natal-branco)');
        this.style.color = 'var(--natal-ouro)';
    });
});