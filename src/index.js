import "./scss/main.scss";

window.addEventListener('load', function () {
    let menuLinkContact = document.querySelector('.menu__link-contact');
    let headerContactModal = document.querySelector('.header__modal');

    menuLinkContact.addEventListener('click', function () {
        headerContactModal.classList.toggle('header__modal--active');
    })


})