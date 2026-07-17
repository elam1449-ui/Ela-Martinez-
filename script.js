// Reveal que entra Y sale: al bajar aparece, al subir desaparece de nuevo.
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('in', entry.isIntersecting);
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

// Anima "Ela Martinez" letra por letra al cargar la página
document.querySelectorAll('.split-name .line').forEach((line, lineIndex) => {
  const text = line.dataset.text;
  line.innerHTML = '';
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = `${(lineIndex * 4 + i) * 0.045}s`;
    line.appendChild(span);
  });
});