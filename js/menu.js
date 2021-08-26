(() => {
  const refs = {
    openModalBtn: document.querySelector('.header-menu-button'),
    closeModalBtn: document.querySelector('.mobile-menu-button'),
    modal: document.querySelector('.mobile-vers-menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
