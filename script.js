// ============================================================
// Footer year
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// Typed role text in hero eyebrow
// ============================================================
const roles = [
  'BUILDING WEB APPLICATIONS',
  'FORMERLY CREDIT RISK',
  'HTML \u2022 CSS \u2022 JAVASCRIPT \u2022 REACT',
];
const typedEl = document.getElementById('typed-role');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typedEl) return;
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 55);
}
typeLoop();

// ============================================================
// Mobile nav toggle
// ============================================================
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// Scroll reveal (progressive enhancement — content is visible
// by default; this only adds a subtle animation when supported)
// ============================================================
const revealItems = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window && revealItems.length) {
  revealItems.forEach((item) => item.classList.add('reveal-init'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => revealObserver.observe(item));

  // Safety net: if an element never intersects for any reason,
  // force it visible after a few seconds so content is never stuck hidden.
  setTimeout(() => {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }, 4000);
}

// ============================================================
// Skill bar fill on scroll into view
// ============================================================
const skillFills = document.querySelectorAll('.skill-fill');
const skillsSection = document.querySelector('.skills');

if ('IntersectionObserver' in window && skillsSection) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillFills.forEach((fill, i) => {
          setTimeout(() => fill.classList.add('filled'), i * 90);
        });
        skillObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  skillObserver.observe(skillsSection);
} else {
  // No IntersectionObserver support: just fill the bars immediately.
  skillFills.forEach((fill) => fill.classList.add('filled'));
}

// ============================================================
// 3D tilt effect on project cards
// ============================================================
const tiltCards = document.querySelectorAll('[data-tilt]');
tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
});

// ============================================================
// Contact form validation (client-side only, no backend)
// ============================================================
const form = document.getElementById('contact-form');
if (form) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    successMsg.classList.remove('show');

    if (!nameInput.value.trim()) {
      document.getElementById('name-error').textContent = 'Please enter your name.';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      document.getElementById('email-error').textContent = 'Please enter a valid email.';
      valid = false;
    }

    if (!messageInput.value.trim()) {
      document.getElementById('message-error').textContent = 'Please enter a message.';
      valid = false;
    }

    if (valid) {
      successMsg.classList.add('show');
      form.reset();
    }
  });
}
