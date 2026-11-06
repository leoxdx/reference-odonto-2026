// Ano do copyright (atualiza sozinho todo ano)
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
});

// Aparecer ao rolar
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.tcard, .split__txt, .frame, .rect, .gallery .ph, .unit, .faq > *').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 3) * 70 + 'ms';
  io.observe(el);
});
