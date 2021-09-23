// humburger-menu menu-active  humburger-menu-active menu-list__link
const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
  burger.classList.toggle('humburger-active');
  menuElem.classList.toggle('menu-active');
};

burger.addEventListener('click', () => {
  toggleMenu();
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});
