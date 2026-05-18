(function () {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
