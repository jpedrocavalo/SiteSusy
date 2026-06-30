const menuToggle = document.getElementById('menuToggle');
const navDrawer  = document.getElementById('navDrawer');

if (menuToggle && navDrawer) {
  menuToggle.addEventListener('click', () => {
    const open = navDrawer.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navDrawer.contains(e.target)) {
      navDrawer.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
