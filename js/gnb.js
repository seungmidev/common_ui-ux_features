const toggleBtn = document.querySelector('.header__toggle');
const menu = document.querySelector('.nav');
const util = document.querySelector('.header__util');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  util.classList.toggle('active');
});