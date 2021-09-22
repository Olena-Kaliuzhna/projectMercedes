const linkHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newArray = [...linkHead, mainScroll];

newArray.forEach((link, index) => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const ID = event.target.getAttribute('href').substr(1);
    console.log('ID: ', ID);
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});