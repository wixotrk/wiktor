// Café DevCat - small JS interactions
// Smooth scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Section reveal on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.15});
sections.forEach(sec => observer.observe(sec));

// Neon glow pulse effect on buttons
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 12px var(--accent-2)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'var(--glow-size) var(--accent-2)';
  });
});

// Gallery slider fade transition
const slider = document.querySelector('.gallery-slider');
if (slider) {
  const slides = slider.querySelectorAll('.slide');
  let index = 0;

  function show(i) {
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === i);
    });
  }
  show(index);
  setInterval(() => {
    index = (index + 1) % slides.length;
    show(index);
  }, 5000);
}
