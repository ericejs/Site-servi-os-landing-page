const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const mobile = document.getElementById('menu-area');
    mobile.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);