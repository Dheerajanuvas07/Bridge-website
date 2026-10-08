
(() => {
  const setBanner = () => {
    const banner = document.getElementById('cookieBanner');
    const button = document.getElementById('cookieAccept');
    if (!banner || !button) return;
    const consent = localStorage.getItem('bridge-cookie-consent');
    if (!consent) {
      banner.hidden = false;
    }
    button.addEventListener('click', () => {
      localStorage.setItem('bridge-cookie-consent', 'dismissed');
      banner.hidden = true;
    });
  };

  const initNav = () => {
    const button = document.getElementById('navMenuBtn');
    const menu = document.getElementById('navMobile');
    if (!button || !menu) return;
    const setOpen = (open) => {
      menu.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
    };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true' ? false : true;
      setOpen(open);
    });
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('click', (event) => {
      if (!menu.hidden && !event.target.closest('.site-header')) setOpen(false);
    });
  };

  const trackMetaPixel = (eventName) => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName);
    }
  };

  const persistUtm = () => {
    const params = new URLSearchParams(window.location.search);
    const collection = {};
    for (const [key, value] of params.entries()) {
      if (key.startsWith('utm_')) collection[key] = value;
    }
    if (Object.keys(collection).length) {
      localStorage.setItem('bridge-utm', JSON.stringify(collection));
    }
    const stored = JSON.parse(localStorage.getItem('bridge-utm') || '{}');
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((fieldName) => {
      const input = document.getElementById(fieldName);
      if (input) {
        input.value = stored[fieldName] || '';
      }
    });
  };

  const initPhoneTracking = () => {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="tel:"]');
      if (!link) return;
      trackMetaPixel('Contact');
    });
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="mailto:"]');
      if (!link) return;
      trackMetaPixel('Contact');
    });
  };

  const initBookingForm = () => {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    const steps = Array.from(form.querySelectorAll('.form-step'));
    let currentStep = 0;
    const nextButton = document.getElementById('nextStep');
    const prevButton = document.getElementById('prevStep');
    const submitButton = document.getElementById('submitBtn');
    const status = document.getElementById('formStatus');

    const showStep = (index) => {
      currentStep = index;
      steps.forEach((step, stepIndex) => {
        step.classList.toggle('active', stepIndex === index);
      });
      prevButton.hidden = index === 0;
      nextButton.hidden = index === steps.length - 1;
      submitButton.hidden = index !== steps.length - 1;
    };

    const validateCurrentStep = () => {
      const step = steps[currentStep];
      const inputs = Array.from(step.querySelectorAll('input, select, textarea'));
      let valid = true;
      for (const input of inputs) {
        if (input.required && !input.value.trim()) {
          valid = false;
          input.focus();
          status.textContent = 'Please complete the required fields before continuing.';
          break;
        }
      }
      if (valid && step.querySelector('input[type="checkbox"][required]')) {
        const checked = Array.from(step.querySelectorAll('input[type="checkbox"][required]')).every((box) => box.checked);
        if (!checked) {
          valid = false;
          status.textContent = 'Please review and accept the required acknowledgments.';
        }
      }
      return valid;
    };

    nextButton.addEventListener('click', () => {
      if (!validateCurrentStep()) return;
      if (currentStep < steps.length - 2) {
        showStep(currentStep + 1);
        status.textContent = '';
      }
    });

    prevButton.addEventListener('click', () => {
      if (currentStep > 0) {
        showStep(currentStep - 1);
        status.textContent = '';
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!validateCurrentStep()) return;

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const submission = {
        ...payload,
        submittedAt: new Date().toISOString()
      };

      const list = JSON.parse(localStorage.getItem('bridge-submissions') || '[]');
      list.unshift(submission);
      localStorage.setItem('bridge-submissions', JSON.stringify(list.slice(0, 10)));

      const body = Object.entries(payload)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');

      const mailto = `mailto:hello@bridgelincoln.com?subject=${encodeURIComponent('New Bridge booking request')}&body=${encodeURIComponent(body)}`;
      const smsNumber = '14025550140';
      const sms = `sms:${smsNumber}?body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setTimeout(() => {
        window.location.href = sms;
      }, 250);

      trackMetaPixel('Lead');
      showStep(steps.length - 1);
      status.textContent = 'Request sent.';
      renderSubmissionList();
      form.reset();
      persistUtm();
    });

    const renderSubmissionList = () => {
      const listElement = document.getElementById('submissionList');
      if (!listElement) return;
      const items = JSON.parse(localStorage.getItem('bridge-submissions') || '[]');
      listElement.innerHTML = items.length ? items.map((item) => {
        const name = item.family_name || 'New request';
        const date = item.appointment_date || 'Date TBD';
        return `<li>${name} · ${date}</li>`;
      }).join('') : '<li>No submissions yet.</li>';
    };

    renderSubmissionList();
    showStep(0);
  };

  const initCaptainForm = () => {
    const form = document.getElementById('captainForm');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const payload = new FormData(form);
      const message = Array.from(payload.entries()).map(([key, value]) => `${key}: ${value}`).join('\n');
      const mailto = `mailto:hello@bridgelincoln.com?subject=${encodeURIComponent('New Bridge captain application')}&body=${encodeURIComponent(message)}`;
      window.location.href = mailto;
      form.reset();
      const status = document.createElement('p');
      status.className = 'form-status';
      status.textContent = 'Application sent. We will be in touch soon.';
      form.appendChild(status);
    });
  };

  setBanner();
  initNav();
  initPhoneTracking();
  persistUtm();
  initBookingForm();
  initCaptainForm();
})();
