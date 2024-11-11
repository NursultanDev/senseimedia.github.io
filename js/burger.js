
const burgerButton = document.querySelector('.header__button');

if (burgerButton) {
    const menu = document.querySelector('.header__menu');
    burgerButton.addEventListener("click", function (e) {
        burgerButton.classList.toggle('_active');
        menu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}
