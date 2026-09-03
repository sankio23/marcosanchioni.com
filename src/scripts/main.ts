// Mobile nav toggle
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const links = document.querySelector<HTMLElement>('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(links.classList.contains('open')));
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
  // Close the mobile menu on Escape and return focus to the toggle
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

// Reveal on scroll — degrades to "always visible" when unsupported or reduced-motion
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealables = document.querySelectorAll<HTMLElement>('.reveal');

const revealAll = () => revealables.forEach((el) => el.classList.add('in'));

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealAll();
} else {
  // threshold must stay 0. IntersectionObserver measures the visible fraction
  // of the TARGET, not of the screen, so any element taller than
  // viewport / threshold can never reach a proportional threshold and would
  // stay hidden for good — which is what happened to long articles on phones.
  // A negative bottom margin gives the same "enters from below" feel without
  // depending on the element's height.
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0, rootMargin: '0px 0px -10% 0px' }
  );
  revealables.forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    io.observe(el);
  });

  // Belt and braces: content is never allowed to stay invisible because of a
  // scripting quirk. Anything still hidden after a moment is shown anyway.
  window.setTimeout(revealAll, 3000);
}
