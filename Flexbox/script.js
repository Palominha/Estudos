const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.list-items');

toggle.addEventListener('click', () => {

    menu.classList.toggle('active');
});