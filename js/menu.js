(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu-button'),
    closeMenuBtn: document.querySelector('.mobile-menu-button'),
    menu: document.querySelector('.mobile-vers-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
