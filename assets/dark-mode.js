(function () {
  var toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;

  var html = document.documentElement;
  var moon = toggle.querySelector('.dark-mode-icon-moon');
  var sun = toggle.querySelector('.dark-mode-icon-sun');

  function setIcons(isDark) {
    if (moon) moon.classList.toggle('hidden', isDark);
    if (sun) sun.classList.toggle('hidden', !isDark);
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function applyTheme(theme) {
    var isDark = theme === 'dark';
    html.classList.toggle('dark', isDark);
    html.classList.toggle('light', !isDark);
    setIcons(isDark);
  }

  applyTheme(html.classList.contains('dark') ? 'dark' : 'light');

  toggle.addEventListener('click', function () {
    var next = html.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });
})();
