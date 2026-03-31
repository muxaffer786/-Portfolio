// SMOOTH SCROLL
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// SCROLL ANIMATION
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));


// NAVBAR SCROLL EFFECT
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(2,6,23,0.95)';
  } else {
    navbar.style.background = 'rgba(2,6,23,0.85)';
  }
});


// ACTIVE LINK HIGHLIGHT
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


// SCROLL TO TOP BUTTON
const btn = document.createElement('button');
btn.innerHTML = '↑';
document.body.appendChild(btn);

btn.style.position = 'fixed';
btn.style.bottom = '20px';
btn.style.right = '20px';
btn.style.padding = '10px 15px';
btn.style.border = 'none';
btn.style.borderRadius = '50%';
btn.style.background = '#6366f1';
btn.style.color = '#fff';
btn.style.cursor = 'pointer';
btn.style.display = 'none';

window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
