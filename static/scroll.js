document.addEventListener('DOMContentLoaded', () => {
  const drawerToggle = document.querySelectorAll('.drawer-toggle');
  const drawerOverlays = document.querySelectorAll('.drawer-overlay');

  drawerToggle.forEach(toggle => {
    toggle.addEventListener('change', (event) => {
      if (event.target.checked) {
        document.body.classList.add('overflow-y-hidden');
      } else {
        document.body.classList.remove('overflow-y-hidden');
      }
    });
  });

  drawerOverlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      document.querySelector('.drawer-toggle').checked = false;
      document.body.classList.remove('overflow-y-hidden');
    });
  });
});