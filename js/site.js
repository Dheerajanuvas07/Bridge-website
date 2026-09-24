'use strict';
// Shared progressive enhancements. Content and FAQ remain readable without JS.
(() => {
  const button = document.getElementById('navMenuBtn');
  const menu = document.getElementById('navMobile');
  function closeMenu(restoreFocus = false) {
    if (!button || !menu) return;
    menu.hidden = true;
    document.body.classList.remove('nav-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) button.focus();
  }
  if (button && menu) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      menu.hidden = !open;
      document.body.classList.toggle('nav-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
    });
    document.addEventListener('click', event => {
      if (!menu.hidden && !event.target.closest('.navbar')) closeMenu();
    });
    const desktop = matchMedia('(min-width: 1024px)');
    desktop.addEventListener('change', () => closeMenu());
  }
  document.querySelectorAll('.step-title').forEach(heading => heading.tabIndex = -1);
  document.querySelectorAll('.form-error').forEach(error => {
    const id = error.id.startsWith('cap-err-') ? error.id.replace('cap-err-', 'cap-') : error.id.replace('err-', '');
    const field = document.getElementById(id);
    if (!field) return;
    field.setAttribute('aria-describedby', error.id);
    field.setAttribute('aria-required', 'true');
    const update = () => field.setAttribute('aria-invalid', String(field.classList.contains('has-error')));
    new MutationObserver(update).observe(field, { attributes: true, attributeFilter: ['class'] });
    update();
  });
  // The existing form functions remain the source of validation and submission.
  ['nextStep', 'capNext'].forEach(name => {
    const original = window[name];
    if (typeof original !== 'function') return;
    window[name] = function (...args) {
      const result = original.apply(this, args);
      const active = document.querySelector('.booking-step.active');
      const target = active?.querySelector('.has-error') || active?.querySelector('.step-title');
      target?.focus({ preventScroll: true });
      return result;
    };
  });
  ['prevStep', 'capPrev'].forEach(name => {
    const original = window[name];
    if (typeof original !== 'function') return;
    window[name] = function (...args) {
      const result = original.apply(this, args);
      document.querySelector('.booking-step.active .step-title')?.focus({ preventScroll: true });
      return result;
    };
  });
})();

// Until EmailJS is configured, provide an honest contact path before data entry.
(() => {
  const config = window.BRIDGE_FORMS;
  if (!config) return;
  const booking = document.body.classList.contains('page-book');
  const ready = config.serviceId && config.publicKey && (booking ? config.bookingTemplateId : config.captainTemplateId);
  if (ready) return;
  const email = booking ? 'bookings@bridgelincoln.com' : 'captains@bridgelincoln.com';
  const box = document.createElement('div');
  box.className = 'field-status';
  box.setAttribute('role', 'status');
  box.append(document.createTextNode(booking ? 'Online booking is not available yet. To arrange appointment support, email ' : 'Online applications are not available yet. To apply, email '));
  const link = document.createElement('a');
  link.href = 'mailto:' + email;
  link.textContent = email;
  box.append(link, document.createTextNode('.'));
  const card = document.querySelector('.booking-card');
  card?.before(box);
  const submit = document.getElementById(booking ? 'submitBtn' : 'capSubmitBtn');
  if (submit) {
    submit.disabled = true;
    submit.textContent = booking ? 'Online booking unavailable' : 'Online applications unavailable';
    const contact = link.cloneNode(true);
    contact.className = 'text-link';
    submit.parentElement.after(contact);
  }
})();

// Calm, one-time entrances inspired by Motion Primitives InView/AnimatedGroup.
// Keep the static document complete and usable without animation or JavaScript.
(() => {
  const nav = document.querySelector('.navbar');
  if (!('IntersectionObserver' in window)) return;
  const sentinel = document.createElement('div');
  sentinel.className = 'nav-sentinel';
  sentinel.setAttribute('aria-hidden', 'true');
  document.body.prepend(sentinel);
  new IntersectionObserver(([entry]) => {
    nav?.classList.toggle('scrolled', !entry.isIntersecting);
  }).observe(sentinel);
  if (!document.body.classList.contains('page-home')) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const animated = document.querySelectorAll('.scope-bridge, .family-story');
  const entrances = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!reduced.matches) entry.target.classList.add('is-revealed');
      entrances.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  animated.forEach(element => entrances.observe(element));
  const steps = document.querySelectorAll('.journey li');
  const activeSteps = new Set();
  const progress = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) activeSteps.add(entry.target);
      else activeSteps.delete(entry.target);
    });
    const current = [...steps].find(step => activeSteps.has(step));
    steps.forEach(step => step.classList.toggle('is-current', step === current));
  }, { rootMargin: '-20% 0px -45% 0px', threshold: 0 });
  steps.forEach(step => progress.observe(step));
  reduced.addEventListener('change', () => {
    if (reduced.matches) animated.forEach(element => element.classList.remove('is-revealed'));
  });
})();
