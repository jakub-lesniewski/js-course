'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    OpenModal();
  });

  btnsCloseModal[i].addEventListener('click', function () {
    CloseModal();
  });
}
