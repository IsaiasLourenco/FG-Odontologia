const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
const icon = document.querySelector('.hamburger-icon');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Alterna ícone entre hamburger e X
  if (nav.classList.contains('active')) {
    icon.innerHTML = '&times;'; // X
  } else {
    icon.innerHTML = '&#9776;'; // Hamburger
  }
});
