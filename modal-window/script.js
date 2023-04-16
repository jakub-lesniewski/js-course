'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);

  if (btnsCloseModal[i]) {
    btnsCloseModal[i].addEventListener('click', closeModal);
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
