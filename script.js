// Cursor
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

function loopRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(loopRing);
}
loopRing();

// Typewriter
const lines = [
  'Web Developer',
  'Data Science Student',
  'Aspiring Data Analyst',
  'UI Designer',
  'Freelance Ready',
  'Open for Internships'
];

let li = 0, ci = 0, erasing = false;
const tEl = document.getElementById('typed');

function typewrite() {
  const word = lines[li];
  if (!erasing) {
    tEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) { erasing = true; setTimeout(typewrite, 1500); return; }
    setTimeout(typewrite, 85);
  } else {
    tEl.textContent = word.slice(0, --ci);
    if (ci === 0) { erasing = false; li = (li + 1) % lines.length; setTimeout(typewrite, 320); return; }
    setTimeout(typewrite, 45);
  }
}
typewrite();

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));