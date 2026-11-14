(() => {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    return;
  }

  document.documentElement.classList.add('reveal-ready');

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  targets.forEach((target) => observer.observe(target));

  const hero = document.querySelector('.hero');
  const mobileCta = document.querySelector('.mobile-cta');
  if (!hero || !mobileCta) return;

  const ctaObserver = new IntersectionObserver(([entry]) => {
    mobileCta.classList.toggle('is-visible', !entry.isIntersecting);
  }, { threshold: 0.05 });

  ctaObserver.observe(hero);
})();
