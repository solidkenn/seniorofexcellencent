(function () {
  var toggle = document.getElementById('mobile-nav-toggle');
  var panel = document.getElementById('mobile-nav-panel');
  if (!toggle || !panel) return;

  var iconMenu = toggle.querySelector('.mobile-nav-icon-menu');
  var iconClose = toggle.querySelector('.mobile-nav-icon-close');
  var links = panel.querySelectorAll('.mobile-nav-list a');

  function setOpen(isOpen) {
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      panel.removeAttribute('hidden');
      panel.classList.add('is-open');
      document.body.classList.add('mobile-nav-open');
      if (iconMenu) iconMenu.classList.add('hidden');
      if (iconClose) iconClose.classList.remove('hidden');
      toggle.setAttribute('aria-label', 'Close menu');
    } else {
      panel.setAttribute('hidden', '');
      panel.classList.remove('is-open');
      document.body.classList.remove('mobile-nav-open');
      if (iconMenu) iconMenu.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  }

  function closePanel() {
    setOpen(false);
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  links.forEach(function (link) {
    link.addEventListener('click', closePanel);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closePanel();
      toggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      closePanel();
    }
  });
})();
