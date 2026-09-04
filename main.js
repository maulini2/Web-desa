// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('is-visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lightbox for galleries
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
if(lightbox && lightboxImg){
  document.querySelectorAll('.gallery figure').forEach(fig => {
    fig.addEventListener('click', () => {
      lightboxImg.src = fig.getAttribute('data-full');
      lightbox.classList.add('open');
    });
  });
  const closeBtn = document.getElementById('lightboxClose');
  if(closeBtn) closeBtn.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) lightbox.classList.remove('open'); });
}
