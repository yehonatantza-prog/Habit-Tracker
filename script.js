const currentYear = document.getElementById('currentYear');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      link.classList.add('active-link');
    }
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = 'הבקשה נשלחה בהצלחה! נחזור אליכם בהקדם.';
      contactForm.reset();
      setTimeout(() => {
        status.textContent = '';
      }, 6000);
    });
  }
});
